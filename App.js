import React from 'react';
import { Text, View } from 'react-native';
import MainNavigator from './components/MainNavigator'
import { black } from './utils/colors'
import { setLocalNotifications } from './utils/helpers'
import UdaciStatusBar from './components/StatusBar'


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
