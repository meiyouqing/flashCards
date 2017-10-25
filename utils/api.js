import { AsyncStorage } from 'react-native'

const CARDS_KEY = 'UDACICARDS:CARDS'

//AsyncStorage.clear()
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
        })
}