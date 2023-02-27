import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
// Import files 
import Styles from './GlobalStyle'
import TextInputValidationComponent from './TextInputValidationComponent';
import TextFieldLabelComponent from './TextFieldLabelComponent';

export default function SignUpScreen({ navigation }: any) {
  const [userName, setUserName] = useState({
    userNameValue: "",
    userNameErrorValue: "",
  });

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

  const userNameValidator = () => {
    if (userName.userNameValue == "") {
      setUserName({ ...userName, userNameErrorValue: "User Name Field canot be empty" });
      return false
    } else {
      setUserName({ ...userName, userNameErrorValue: "" });
      return true
    }
  };



  const signInAction = () => {
    emailValidator();
    passwordValidator();
    userNameValidator();
    Keyboard.dismiss();

    if (userName.userNameValue !="" && userNameValidator()==true && email.emailValue != "" && emailValidator() == true && password.passwordValue != "" && passwordValidator() == true) {
      navigation.push('DashboardScreen')
    }
  }
  return (
    <View style={Styles.signUpBody}>
      <TextFieldLabelComponent txtFieldLblText={"User Name"}/>
      <TextInput style={Styles.textInput} placeholder="Enter your UserName" onBlur={userNameValidator} onChangeText={(txt) => {
        setUserName({...userName, userNameValue: txt});
      }}></TextInput>
      <TextInputValidationComponent getErrorText={userName.userNameErrorValue}/>
      <TextFieldLabelComponent txtFieldLblText={"Email ID"}/>
      <TextInput style={Styles.textInput} placeholder="Enter your Email ID" onBlur={emailValidator} onChangeText={(txt) => {
        setEmail({...email, emailValue: txt});
      }}></TextInput>
      <TextInputValidationComponent getErrorText={email.emailErrorValue}/>
      <TextFieldLabelComponent txtFieldLblText={"Password"}/>
      <TextInput style={Styles.textInput} placeholder="Enter your password" onBlur={passwordValidator} secureTextEntry={true} onChangeText={(txt) => setPassword({...password, passwordValue: txt})}></TextInput>
      <TextInputValidationComponent getErrorText={password.passwordErrorValue}/>
      <View style={Styles.buttonView}>
        <TouchableOpacity style={Styles.button} onPress={signInAction}>
          <Text style={Styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
