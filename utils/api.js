import { AsyncStorage } from 'react-native'

const CARDS_KEY = 'UDACICARDS:CARDS'
const events = {}

export function setEvent(event, fun){
    events[event] = fun
}
// AsyncStorage.clear()
export function getDecks() {
    return AsyncStorage.getItem(CARDS_KEY)
        .then(JSON.parse)
}

export function getDeck(id) {
    return getDecks()
        .then(decks => decks[id])
}

export function addDeck(title) {
    return getDecks()
        .then(decks => {
            AsyncStorage.setItem(CARDS_KEY, JSON.stringify({
                ...decks,
                [title]: {
                    title,
                    questions: []
                }
            }))
            typeof events.updateDecksList === 'function' && events.updateDecksList()
        })
}

export function addCardToDeck(title, card) {
    return getDecks()
        .then(decks => {
            AsyncStorage.setItem(CARDS_KEY, JSON.stringify({
                ...decks,
                [title]: {
                    title,
                    questions: decks[title].questions.concat([card])
                }
            }))
            typeof events.updateDecksList === 'function' && events.updateDecksList()
        })
}