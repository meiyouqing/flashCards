import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import DecksList from './components/DecksList'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import QuizView from './components/QuizView'
import { Constants } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { black, white } from './utils/colors'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DecksList:{
    screen: DecksList,
    navigationOptions:{
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />,
    }
  },
  NewDeck:{
    screen: AddDeck,
    navigationOptions:{
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='credit-card-plus' size={30} color={tintColor} />,
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? black : white,
    style: {
      height: 56,
      backgroundColor:  Platform.OS === 'ios' ? white : black,
    }
  }
})
const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({navigation}) => ({
      headerTintColor: white,
      title: navigation.state.params.deck.title,
      headerStyle: {
        backgroundColor: black,
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      headerTintColor: white,
      title: 'Add Card',
      headerStyle: {
        backgroundColor: black,
      }
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({navigation}) => ({
      headerTintColor: white,
      title: 'Quiz',
      headerStyle: {
        backgroundColor: black,
      }
    })
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UdaciStatusBar backgroundColor={black} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
