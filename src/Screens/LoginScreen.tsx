import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
// Import files
import Styles from './GlobalStyle';
import TextInputValidationComponent from './TextInputValidationComponent';
import TextFieldLabelComponent from './TextFieldLabelComponent';
import TextInputComponent from './TextInputComponent';

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
            {/* <Text style={Styles.text}>Sign in to your account</Text> */}
            <TextFieldLabelComponent txtFieldLblText={"Email"}/>
            <TextInputComponent secureTextEntryObj={false} placeholderObj = {"Enter your Email"} onBlurObj={emailValidator} onChangeTextObj={
                (txt: any) => {
                    emailValidator();
                    setEmail({...email, emailValue: txt});
                }
            }/>
            <TextInputValidationComponent getErrorText={email.emailErrorValue}/>
            <TextFieldLabelComponent txtFieldLblText={"Password"}/>
            <TextInputComponent secureTextEntryObj={true} placeholderObj = {"Enter your password"} onBlurObj={passwordValidator} onChangeTextObj={
                (txt: any) => {
                    passwordValidator();
                    setPassword({...password, passwordValue:(txt)})
                }
            }/>
            <TextInputValidationComponent getErrorText={password.passwordErrorValue}/>
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

