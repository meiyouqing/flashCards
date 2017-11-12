import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, VirtualizedList,StyleSheet,  Platform } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { white, black } from '../utils/colors'
import styles from '../styles'

class AddDeck extends Component {
    state = {
        question:'',
        answer:'',
    }
    submit = () => {
        const {question, answer} = this.state
        if(!question || !answer) return

        const { title, handleAddCard } = this.props.navigation.state.params

        addCardToDeck(title, this.state)
            .then(() => {
                handleAddCard()
                this.setState({
                    question:'',
                    answer:'',
                })
                this.props.navigation.goBack()
            })        
    }
    handleQueInput = (question) =>{
        this.setState({question})
    }
    handleAnswerInput = (answer) =>{
        this.setState({answer})
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <TextInput style={[styles.input, {marginTop:60}]} placeholder="Your question" onChangeText={this.handleQueInput} value={this.state.question} />
                <TextInput style={[styles.input, {marginTop: 40}]} placeholder="Your answer" onChangeText={this.handleAnswerInput} value={this.state.answer} />
                <View style={[styles.container, {marginTop:30}]}>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddDeck