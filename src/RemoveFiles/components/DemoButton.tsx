import React from 'react';
import {StyleSheet, Text, Pressable, ViewStyle, TextStyle} from 'react-native';

interface Props {
  onPress: () => void;
}

export function DemoButton({
  onPress,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '##D3D3D3' : '#5A5A5A',
        },
        styles.container,
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    minWidth: '80%',
    maxWidth: '100%',
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});
