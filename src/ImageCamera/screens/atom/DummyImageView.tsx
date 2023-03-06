import { Image } from 'react-native'
import Styles from '../Styles'
import React from 'react';

export default function DummyImageView(props: any) {
  return (
    <Image source={require('../../assets/dummy.png')}
    style={Styles.image}></Image>
  )  

  // if (props != '') {
  //   return (
  //     <Image source={{uri: props}}
  //     style={Styles.image}></Image>
  //   )
  // } else {
  //   return (
  //     <Image source={require('../../assets/dummy.png')}
  //     style={Styles.image}></Image>
  //   )  
  // }
}