import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../theme/global.style';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = React.useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>Counter Screen: {count}</Text>
      <FAB
        label="Hello world"
        style={styles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
