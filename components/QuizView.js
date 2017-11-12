import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,  Platform } from 'react-native'
import Card from './Card'
import { getDeck } from '../utils/api'
import { white, black, red, green } from '../utils/colors'
import { clearLocalNotifications, setLocalNotifications } from '../utils/helpers'

class QuizView extends Component {
    state = {
        score: 0,
        pass: 0,
        side: 'Answer',
    }
    handleCorrect = () => {
        this.setState((state) => ({
            score: state.score + 1,
            pass: state.pass + 1,
        }), this.handleComplet)
    }
    handleIncorrect = () => {
        this.setState((state) => ({
            pass: state.pass + 1,
        }), this.handleComplet)
    }
    handleComplet = () => {
        const { deck } = this.props.navigation.state.params
        const { pass } = this.state
        if(pass === deck.questions.length) {
            // clear/set local notifications
            clearLocalNotifications()
                .then(setLocalNotifications)
        }
    }
    handleRotat = () => {
        this.setState(state => ({
            side: state.side === 'Question' ? 'Answer' : 'Question'
        }))
    }
    handleRestart = () => {
        this.setState({
            score: 0,
            pass: 0,
            side: 'Answer',
            completed: false,
        })
    }
    handleBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const { deck } = this.props.navigation.state.params
        const { pass, side, result, score, completed } = this.state
        return (
            !!deck.questions[pass]
            ? (<View style={{flex: 1}}>
                <Text style={styles.countInfo}>{ pass+1 }/{ deck.questions.length }</Text>
                <Card
                    text={side === 'Answer' ? deck.questions[pass].question : deck.questions[pass].answer}
                    side={side}
                    handleRotat={this.handleRotat}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btn, styles.correctBtn]} onPress={this.handleCorrect}>
                        <Text style={[styles.btnText, {color: white}]}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.incorrectBtn]} onPress={this.handleIncorrect}>
                        <Text style={[styles.btnText, {color: white}]}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
              </View>)
            : (<View style={styles.center}>
                <Text>{ `your percentage correct is` }</Text>
                <Text style={styles.score}>{ `${Math.round((score/pass)*100)}%` }</Text>
                <View style={styles.btnContainer2}>
                    <TouchableOpacity style={[styles.btn, styles.restartBtn]} onPress={this.handleRestart}>
                        <Text style={[styles.btnText, {color: black}]}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.backBtn]} onPress={this.handleBack}>
                        <Text style={[styles.btnText, {color: white}]}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
              </View>)
        )
    }
}

export default QuizView