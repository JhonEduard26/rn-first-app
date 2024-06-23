import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { HomeScreen } from './src/screens/home';
// import { CounterScreen } from './src/screens/counter';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/screens/counter-m3';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.screen}>
        <CounterM3Screen />
        {/* <HomeScreen name="Jhon Eduard" /> */}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
