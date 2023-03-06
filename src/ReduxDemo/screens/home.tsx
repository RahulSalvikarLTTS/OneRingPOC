import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { decrement, increment } from "../redux/action";
import store from "../redux/store";

const Home = ({subscribe, getState, dispatch}) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const unsubscribe = subscribe(() => {
            let value = getState().num
            setNumber(value)
        })

        return () => {
            unsubscribe()
        }
    })

    const onIncrementAction = () => {
        dispatch(increment(number))
    }

    const onDecrementAction = () => {
        dispatch(decrement(number))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number}</Text>
            <TouchableOpacity onPress={onIncrementAction}>
                <Text>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDecrementAction}>
                <Text>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
    },
})

export default Home;