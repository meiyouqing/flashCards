import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { white, black, red, green } from '../utils/colors'
import styles from '../styles'

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
