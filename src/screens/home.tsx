import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name?: string;
}

export const HomeScreen = ({ name = 'John Doe' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
    padding: 16,
  },
});
