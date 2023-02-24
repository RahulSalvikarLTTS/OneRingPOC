import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

// Import files 
import LoginScreen from './Screens/LoginScreen'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
    </SafeAreaView>
  )
}