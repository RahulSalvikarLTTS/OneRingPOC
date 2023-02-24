import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from './GlobalStyle'

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState({
        emailValue: "",
        emailErrorValue: "",
    });

    const [password, setPassword] = useState({
        passwordValue: "",
        passwordErrorValue: "",
    });

    const emailValidator = () => {
        if (email.emailValue == "") {
            setEmail({ ...email, emailErrorValue: "Email Field canot be empty" });
        } else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email.emailValue))) {
            setEmail({ ...email, emailErrorValue: "Email not valid" });
        } else {
            setEmail({ ...email, emailErrorValue: "" });
        }
    };

    const passwordValidator = () => {
        if (password.passwordValue == "") {
            setPassword({ ...password, passwordErrorValue: "Password Field canot be empty" });
        } else {
            setPassword({ ...password, passwordErrorValue: "" });
        }
    };


    const signInAction = () => {
        if (email.emailValue != "" && email.emailErrorValue == "" && password.passwordErrorValue == "" && password.passwordValue != "") {
            navigation.push('DashboardScreen')
        } else {
            emailValidator();
            passwordValidator();
        }
    }

    const signUpAction = () => {
        navigation.push('SignUpScreen')
    }
    return (
        <View style={Styles.body}>
            <Text style={Styles.textHeader}>Wellcome to OneRing</Text>
            <Text style={Styles.text}>Sign in to your account</Text>
            <TextInput style={Styles.textInput} placeholder="Enter your UserName" onBlur={emailValidator} onChangeText={(txt) => {
                setEmail(txt);
            }}></TextInput>
            <Text style={Styles.errorText}>{email.emailErrorValue}</Text>
            <TextInput style={Styles.textInput} placeholder="Enter your password" onBlur={passwordValidator} secureTextEntry={true} onChangeText={(txt) => setPassword(txt)}></TextInput>
            <Text style={Styles.errorText}>{password.passwordErrorValue}</Text>
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

