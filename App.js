import React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';
import { Constants } from 'expo'
import MainNavigator from './components/MainNavigator'
import { black } from './utils/colors'
import { setLocalNotifications } from './utils/helpers'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotifications()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={black} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}
