import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./screens/home";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;