import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
    },
    imageTextContainer: {
      flex: 1,
      flexDirection: 'column',
      //flexWrap: 'wrap',
      //marginVertical: 8,
      alignItems: 'center',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'column',
      //flexWrap: 'wrap',
      //marginVertical: 8,
      // alignItems: 'center'
    },
    imageContainer: {
      alignItems: 'center',
      padding: 50,
    },
    image: {
      width: 200,
      height: 200,
      alignItems: 'center',
    },
    text: {
      alignItems: 'center',
      padding: 20,
      fontSize: 18,
      fontWeight:'bold',
    },
    spinnerTextStyle: {
      color: '#FFF',
    },
  });