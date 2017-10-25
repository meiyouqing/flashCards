import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,  Platform } from 'react-native'
import Card from './Card'
import { getDeck } from '../utils/api'
import { white, black, red, green } from '../utils/colors'

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
        }))
    }
    handleIncorrect = () => {
        this.setState((state) => ({
            pass: state.pass + 1,
        }))
    }
    handleRotat = () => {
        this.setState(state => ({
            side: state.side === 'Question' ? 'Answer' : 'Question'
        }))
    }
    render(){
        const { deck } = this.props.navigation.state.params
        const { pass, side, result, score } = this.state
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
                        <Text style={styles.btnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.incorrectBtn]} onPress={this.handleIncorrect}>
                        <Text style={styles.btnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
              </View>)
            : (<View style={styles.center}>
                <Text>{ `your percentage correct is ${Math.round((score/pass)*100)}%` }</Text>
              </View>)
        )
    }
}

const styles = StyleSheet.create({
    center:{
        flex: 1,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countInfo:{
        fontSize: 18,
        marginTop: 15,
        marginLeft: 15,
    },
    btnContainer:{
        flex: 1,
        alignItems: 'center',
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 285 : 180,
        height: 50,
        marginBottom: 20,
        borderRadius: Platform.OS === 'ios' ? 8 : 3,
    },
    correctBtn:{
        backgroundColor: green,
    },
    incorrectBtn:{
        backgroundColor: red,
    },
    btnText:{
        fontSize: 24,
        color: white,
    }
})

export default QuizView