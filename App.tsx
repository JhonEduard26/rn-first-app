import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/home';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <HomeScreen name="Jhon Eduard" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
