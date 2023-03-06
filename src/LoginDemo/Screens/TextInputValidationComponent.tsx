import { Text } from 'react-native'
import React from 'react'
import Styles from './GlobalStyle'

export default function TextInputValidationComponent(props: any) {
    return (
        <Text style={Styles.errorText}>{props.getErrorText}</Text>
    )
}