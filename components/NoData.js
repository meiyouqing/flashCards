import React from 'react'
import { View, Text } from 'react-native'

export default function NoData({ note}){
  return <View style={styles.noDataText}><Text>{ note }</Text></View>
}