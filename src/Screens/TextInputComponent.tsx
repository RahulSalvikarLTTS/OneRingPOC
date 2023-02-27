import { TextInput } from 'react-native'
import React from 'react'
// Import files
import Styles from './GlobalStyle';

export default function TextInputComponent(props: any) {
    return (
        <TextInput
            style={Styles.textInput}
            secureTextEntry={props.secureTextEntryObj}
            placeholder={props.placeholderObj}
            onBlur={props.onBlurObj}
            onChangeText={props.onChangeTextObj}
        />
    )
}