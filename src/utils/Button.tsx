import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, StyleSheet, KeyboardAvoidingView } from 'react-native';

interface ButtonProps {
  label: string
  onPress?: () => void,
  style?: StyleProp<ViewStyle>,
}

export default function ButtonComponent({ label, onPress, style }: ButtonProps) {
  return (
    <KeyboardAvoidingView style={styled.container}>
      <TouchableOpacity
        style={styled.button}
        onPress={onPress}
      >
        <Text style={styled.text}>{label}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styled = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 15,
    backgroundColor: '#92C3B1',
    width: '60%',
    height: 57,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#fff',
  },
});
