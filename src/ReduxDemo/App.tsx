import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import store from "./redux/store";
import Home from "./screens/home";


const App = () => {
  return(
    <View style= {styles.container}>
      <Home {...store}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;