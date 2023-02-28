import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import { decrement, increment } from '../redux/action'


export default function Home() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      let value = store.getState().num
      setNumber(value)
    })
  
    return () => {
      unsubscribe()
    }
  }, [])
  

  const onAdd = () => {
    store.dispatch(increment(number))
  }
  const onMinus = () => {
    store.dispatch(decrement(number))
  }

  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <Button title='Add' onPress={onAdd}></Button>
      <Button title='Minus' onPress={onMinus}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})