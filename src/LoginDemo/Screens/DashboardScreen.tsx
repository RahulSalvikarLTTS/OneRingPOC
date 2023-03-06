import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
const Drawer = createDrawerNavigator();

export default function DashboardScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
    </Drawer.Navigator>
  )
}