import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from './GlobalStyle'

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

  const userNameValidator = () => {
    if (userName.userNameValue == "") {
      setUserName({ ...userName, userNameErrorValue: "User Name Field canot be empty" });
    } else {
      setUserName({ ...userName, userNameErrorValue: "" });
    }
  };



  const signInAction = () => {
    if (userName.userNameValue !="" && userName.userNameErrorValue == "" && email.emailValue != "" && email.emailErrorValue == "" && password.passwordErrorValue == "" && password.passwordValue != "") {
      navigation.push('DashboardScreen')
    } else {
      emailValidator();
      passwordValidator();
      userNameValidator();
    }
  }
  return (
    <View style={Styles.signUpBody}>
      <Text style={Styles.text}>User Name</Text>
      <TextInput style={Styles.textInput} placeholder="Enter your UserName" onBlur={userNameValidator} onChangeText={(txt) => {
        setUserName(txt);
      }}></TextInput>
      <Text style={Styles.errorText}>{userName.userNameErrorValue}</Text>
      <Text style={Styles.text}>Email ID</Text>
      <TextInput style={Styles.textInput} placeholder="Enter your Email ID" onBlur={emailValidator} onChangeText={(txt) => {
        setEmail(txt);
      }}></TextInput>
      <Text style={Styles.errorText}>{email.emailErrorValue}</Text>
      <Text style={Styles.text}>Password</Text>
      <TextInput style={Styles.textInput} placeholder="Enter your password" onBlur={passwordValidator} secureTextEntry={true} onChangeText={(txt) => setPassword(txt)}></TextInput>
      <Text style={Styles.errorText}>{password.passwordErrorValue}</Text>
      <View style={Styles.buttonView}>
        <TouchableOpacity style={Styles.button} onPress={signInAction}>
          <Text style={Styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
