import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { getDecks, setEvent } from '../utils/api'
import { borderGray, fontGray, white } from '../utils/colors'
import NoData from './NoData'
import styles from '../styles'

class DecksList extends Component {
    state = {
        decks:null
    }
    getDecks = () => {
        getDecks()
            .then(decks => {
                //console.log(decks)
                if(decks){
                    this.setState({decks})
                }
            })
            .catch(err => console.log(err))
    }
    gotoDeckView = (deck) => {
        this.props.navigation.navigate('DeckView', {deck, handleAddCardDecks: this.getDecks})
    }
    componentDidMount(){
        this.getDecks()
        setEvent('updateDecksList', this.getDecks)
    }
    render(){
        const {decks} = this.state

        return (
            <View style={{flex:1}}>
                <ScrollView>
                    {
                        decks
                        ? Object.keys(decks).map(title => {
                            return (
                            <TouchableOpacity key={title} style={styles.deckContainer} onPress={() => {this.gotoDeckView(decks[title])}}>
                                <Text style={styles.deckTitle}>{ decks[title].title }</Text>
                                <Text style={styles.deckInfo}>{ decks[title].questions.length } cards</Text>
                            </TouchableOpacity>
                        )
                    })
                        : <NoData note="There is no deck yet!"/>
                    }
                </ScrollView>
            </View>
        )
    }
}

export default DecksList