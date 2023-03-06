import { View } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from './TextInputComponent';
import TextFieldLabelComponent from './TextFieldLabelComponent';
import TextInputValidationComponent from './TextInputValidationComponent';

export default function EmailComponent(props: any) {
    const [email, setEmail] = useState({
        emailValue: "",
        emailErrorValue: "",
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

    return (
        <View>
            <TextFieldLabelComponent txtFieldLblText={"Email"} />
            <TextInputComponent secureTextEntryObj={false} placeholderObj={"Enter your Email"} onBlurObj={emailValidator} onChangeTextObj={
                (txt: any) => {
                    console.log(txt);
                    emailValidator();
                    setEmail({ ...email, emailValue: txt });
                }
            } />
            <TextInputValidationComponent getErrorText={email.emailErrorValue} />
        </View>
    )
}