import * as React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Props {
  children: string;
}

export function DemoTitle({children}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#5A5A5A',
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});
