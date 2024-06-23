import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#7b2cbf' : '#5a189a',
        },
        styles.button,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#5a189a',
    fontSize: 18,
  },
});
