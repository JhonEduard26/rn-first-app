import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = React.useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Screen: {count}</Text>
      {/* <PrimaryButton
        label="Hola botón"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      /> */}
      <Button
        mode="contained"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}>
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: '300',
    color: 'black',
  },
});
