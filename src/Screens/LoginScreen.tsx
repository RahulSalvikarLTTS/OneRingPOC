import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={Styles.body}>
      <Text style={Styles.textHeader}>Wellcome to OneRing</Text>
      <Text style={Styles.text}>Sign in to your account</Text>
      <TextInput style={Styles.textInput} placeholder="Enter your UserName"></TextInput>
      <TextInput style={Styles.textInput} placeholder="Enter your password" secureTextEntry={true}></TextInput>
      <View style={Styles.buttonView}>
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
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
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        borderRadius: 5,
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
    }
})