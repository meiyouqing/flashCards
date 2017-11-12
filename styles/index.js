import { StyleSheet, Platform } from 'react-native'
import { white, black, fontGray, green, red, borderGray } from '../utils/colors'

export default styles = StyleSheet.create({
    noDataText:{
        flex: 1,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderColor: borderGray,
        backgroundColor: white,
    },
    deckTitle:{
        fontSize:30,
    },
    deckInfo:{
        fontSize:18,
        color: fontGray,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    submitBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 255 : 150,
        height: 50,
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: black,
        borderRadius: Platform.OS === 'ios' ? 8 : 3,
    },
    submitText:{
        fontSize: 24,
        color: white,
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
    },
    deckDetailContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
    },
    btnContainer:{
        flex: 1,
        alignItems: 'center',
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 285 : 180,
        height: 50,
        marginBottom: 20,
        borderRadius: Platform.OS === 'ios' ? 8 : 3,
    },
    addBtn:{
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black,
    },
    startBtn:{
        backgroundColor: black,
    },
    btnText:{
        fontSize: 24,
    },
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countInfo:{
        fontSize: 18,
        marginTop: 15,
        marginLeft: 15,
    },
    score: {
        fontSize: 58,
        marginTop: 20,
    },
    btnContainer2:{
        alignItems: 'center',
        marginTop: 30,
    },
    correctBtn:{
        backgroundColor: green,
    },
    incorrectBtn:{
        backgroundColor: red,
    },
    restartBtn:{
        backgroundColor: white,
    },
    backBtn:{
        backgroundColor: black,
    }
    
})
