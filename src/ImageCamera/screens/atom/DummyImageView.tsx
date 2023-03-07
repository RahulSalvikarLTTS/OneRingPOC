import { Image } from 'react-native'
import Styles from '../Styles'
import React from 'react';

interface Props {
  imageUrl: string;
}

export default function DummyImageView({imageUrl}: Props) {
  return (
    <Image
    source={imageUrl == '' ? require('../../assets/dummy.png') : { uri: imageUrl }}
    style={Styles.image}
  />
  )  
}