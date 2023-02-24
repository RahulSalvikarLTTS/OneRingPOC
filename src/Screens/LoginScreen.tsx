import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
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
            return false
        } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.emailValue)) == true) {
            setEmail({ ...email, emailErrorValue: "Email not valid" });
            return false
        } else {
            setEmail({ ...email, emailErrorValue: "" });
            return true
        }
    };

    const passwordValidator = () => {
        if (password.passwordValue == "") {
            setPassword({ ...password, passwordErrorValue: "Password Field canot be empty" });
            return false
        } else {
            setPassword({ ...password, passwordErrorValue: "" });
            return true
        }
    };


    const signInAction = () => {
        emailValidator();
        passwordValidator();
        Keyboard.dismiss();
        if (email.emailValue != "" &&  passwordValidator() == true && emailValidator() == true && password.passwordValue !== "") {
            navigation.push('DashboardScreen')
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
                emailValidator();
                setEmail({...email, emailValue: txt});
            }}></TextInput>
            <Text style={Styles.errorText}>{email.emailErrorValue}</Text>
            <TextInput style={Styles.textInput} placeholder="Enter your password" onBlur={passwordValidator} secureTextEntry={true} onChangeText={(txt) => {
                passwordValidator();
                setPassword({...password, passwordValue:(txt)})
            }}></TextInput>
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

