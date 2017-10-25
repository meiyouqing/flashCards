import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, VirtualizedList,StyleSheet,  Platform } from 'react-native'
import { addDeck } from '../utils/api'
import { white, black } from '../utils/colors'

class AddDeck extends Component {
    state = {
        input:''
    }
    add = () => {
        if(!this.state.input) return
        addDeck(this.state.input)
            .then(() => {
                this.props.navigation.navigate('Home', {update: 'decksList'})
            })        
    }
    handleChangeText = (input) =>{
        this.setState({input})
    }
    render(){
        return (
            <View>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>What is the title</Text>
                    <Text style={styles.title}>of your new</Text>
                    <Text style={styles.title}>deck?</Text>
                </View>
                <TextInput style={styles.input} placeholder="Deck Title" onChangeText={this.handleChangeText} />
                <View style={styles.container}>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.add}>
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
    },
    titleWrap: {
        marginTop: 70,
        marginBottom: 50,
    },
    title:{
        fontSize:50,
        textAlign: 'center'
    },
    input:{
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
        width: 150,
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