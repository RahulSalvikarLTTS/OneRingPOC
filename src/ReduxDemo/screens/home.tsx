import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/action";


const Home = () => {
    const number = useSelector((state : any) => state.num)
    const dispatch = useDispatch();

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