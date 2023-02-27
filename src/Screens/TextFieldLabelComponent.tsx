import { View, Text } from 'react-native'
import React from 'react'
import Styles from './GlobalStyle'

export default function TextFieldLabelComponent(props: any) {
    return (
        <Text style={Styles.text}>{props.txtFieldLblText}</Text>
    )
}