import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { white, black, red, green } from '../utils/colors'

export default function Card({text, side, handleRotat}) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{ text }</Text>
            <TouchableOpacity styl={styles.sideBtn} onPress={handleRotat}>
                <Text style={styles.sideText}>{ side }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    text:{
        fontSize:50,
        textAlign: 'center',
        //wordBreak: 'break-word',
    },
    sideBtn:{
        marginTop:50
    },
    sideText:{
        fontSize: 24,
        color: red,
        fontWeight: 'bold',
    }
})
