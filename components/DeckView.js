import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,  Platform } from 'react-native'
import { getDeck } from '../utils/api'
import { white, black, fontGray } from '../utils/colors'
import styles from '../styles'

class DeckView extends Component {
    state = {
        deck: this.props.navigation.state.params.deck
    }
    add = () => {
        const {handleAddCardDecks} = this.props.navigation.state.params
        this.props.navigation.navigate('AddCard', {title: this.state.deck.title, handleAddCard: this.getDeck, handleAddCardDecks})
    }
    start = () => {
        const { deck } = this.state

        if(!(deck.questions && deck.questions.length)) {
            alert('This deck hasn\'t any cards')
            return
        }
        this.props.navigation.navigate('QuizView', {deck: this.state.deck})
    }
    getDeck = () => {
        getDeck(this.state.deck.title)
            .then(deck => {
                this.setState({deck})
            })
    }
    render(){
        const {deck} = this.state
        return (
            <View style={{flex: 1}}>
                <View style={styles.deckDetailContainer}>
                    <Text style={{fontSize: 50}}>{ deck.title }</Text>
                    <Text style={{fontSize: 30}}>{ deck.questions && deck.questions.length } cards</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btn, styles.addBtn]} onPress={this.add}>
                        <Text style={[styles.btnText, {color: black}]}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.startBtn]} onPress={this.start}>
                        <Text style={[styles.btnText, {color: white}]}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default DeckView