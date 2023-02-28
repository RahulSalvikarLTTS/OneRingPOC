import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import HomeScreen from './Home/Home'
import store from './redux/store'



export default class ReduxHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})