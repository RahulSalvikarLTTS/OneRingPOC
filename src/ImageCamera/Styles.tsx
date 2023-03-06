import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'alicered',
    },
    buttonContainer: {
      flexDirection: 'column',
      //flexWrap: 'wrap',
      //marginVertical: 8,
      alignItems: 'center'
    },
    imageContainer: {
      marginVertical: 45,
      alignItems: 'center',
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