import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// Import files 
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import DashboardScreen from './Screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Home", headerShown: false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{title: "Sign Up"}} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{headerShown: false, headerBackVisible: false, gestureEnabled: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}