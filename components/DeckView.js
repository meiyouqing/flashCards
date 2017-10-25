import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,  Platform } from 'react-native'
import { getDeck } from '../utils/api'
import { white, black, fontGray } from '../utils/colors'
//import { NavigationActions } from 'react-navigation'

class DeckView extends Component {
    state = {
        deck: this.props.navigation.state.params.deck
    }
    add = () => {
        const handleAddCardDecks = this.props.navigation.state.params.handleAddCardDecks
        this.props.navigation.navigate('AddCard', {title: this.state.deck.title, handleAddCard: this.getDeck, handleAddCardDecks})
    }
    start = () => {
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
                <View style={styles.deckContainer}>
                    <Text style={styles.deckTitle}>{ deck.title }</Text>
                    <Text style={styles.deckInfo}>{ deck.questions && deck.questions.length } cards</Text>
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

const styles = StyleSheet.create({
    deckContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
    },
    btnContainer:{
        flex: 1,
        alignItems: 'center',
    },
    deckTitle:{
        fontSize:50,
    },
    deckInfo:{
        fontSize:30,
        color: fontGray,
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 285 : 180,
        height: 50,
        marginBottom: 20,
        borderRadius: Platform.OS === 'ios' ? 8 : 3,
    },
    addBtn:{
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black,
    },
    startBtn:{
        backgroundColor: black,
    },
    btnText:{
        fontSize: 24,
    }
})

export default DeckView