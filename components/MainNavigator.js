import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import DecksList from './DecksList'
import DeckView from './DeckView'
import AddDeck from './AddDeck'
import AddCard from './AddCard'
import QuizView from './QuizView'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { black, white } from '../utils/colors'


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

export default MainNavigator
