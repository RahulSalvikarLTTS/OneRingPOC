import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    textHeader: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        textAlign: 'left',
        fontSize: 18,
    },
    textInput: {
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        borderRadius: 5,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'black',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
    },
    buttonView: {
        //backgroundColor: 'black',
        alignItems: 'center',
    },
    errorText: {
        margin: 2,
        textAlign: 'left',
        fontSize: 12,
        color: 'red'
    },
    signUpBody: {
        padding: 20,
    }
})