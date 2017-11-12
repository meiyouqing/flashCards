import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, VirtualizedList,StyleSheet,  Platform } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { white, black } from '../utils/colors'

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
                <TextInput style={styles.input} placeholder="Your question" onChangeText={this.handleQueInput} value={this.state.question} />
                <TextInput style={[styles.input, {marginTop: 40}]} placeholder="Your answer" onChangeText={this.handleAnswerInput} value={this.state.answer} />
                <View style={styles.container}>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    input:{
        marginTop: 20,
        marginLeft:20,
        marginRight: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: white,
        borderWidth: 1,
        borderRadius: Platform.OS === 'ios' ? 5 : 2,
        borderColor: black,
    },
    submitBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 255 : 150,
        height: 50,
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: black,
        borderRadius: Platform.OS === 'ios' ? 8 : 3,
    },
    submitText:{
        fontSize: 24,
        color: white,
    }
})

export default AddDeck