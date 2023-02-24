import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const signInAction = () => {
        if (email != "" && password != "") {
            navigation.push('DashboardScreen')
        } else {
        }
    }

    const signUpAction = () => {
        navigation.push('SignUpScreen')
    }
    return (
        <View style={Styles.body}>
            <Text style={Styles.textHeader}>Wellcome to OneRing</Text>
            <Text style={Styles.text}>Sign in to your account</Text>
            <TextInput style={Styles.textInput} placeholder="Enter your UserName" onChangeText={(txt) => {
              setEmail(txt);
            }}></TextInput>
            {
                email == "" ? <Text style={Styles.errorText}>Email Field canot be empty</Text> : null
            }
            
            <TextInput style={Styles.textInput} placeholder="Enter your password" secureTextEntry={true} onChangeText={(txt) => setPassword(txt)}></TextInput>
            {
                password == "" ? <Text style={Styles.errorText}>Password Field canot be empty</Text> : null
            }
            <View style={Styles.buttonView}>
                <TouchableOpacity style={Styles.button} onPress={signInAction}>
                    <Text style={Styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={signUpAction}>
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
})