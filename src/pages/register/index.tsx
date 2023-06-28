import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import FormGroupComponent from '../../components/FormGroup';
import ButtonComponent from '../../utils/Button';

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView style={styled.container}>
      <View style={styled.contenForm}>
        <FormGroupComponent placeholder="Nome Completo"/>
        <FormGroupComponent placeholder="Email"/>
        <FormGroupComponent placeholder="Senha"/>
        <FormGroupComponent placeholder="Confirmar Senha"/>
      </View>
      <ButtonComponent label="Criar Conta"/>
    </KeyboardAvoidingView>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EFF5F6',
  },
  contenForm: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 130,
    borderColor: 'white',
  },
});
