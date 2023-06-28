import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormGroupComponent from '../../components/FormGroup';
import ButtonComponent from '../../utils/Button';

export default function RegisterScreen() {
  return (
    <View style={styled.container}>
      <View style={styled.contenForm}>
        <FormGroupComponent placeholder="Nome Completo"/>
        <FormGroupComponent placeholder="Email"/>
        <FormGroupComponent placeholder="Senha"/>
        <FormGroupComponent placeholder="Confirmar Senha"/>
      </View>
      <ButtonComponent label="Criar Conta"/>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#EFF5F6',
  },
  contenForm: {
    paddingTop: 130,
    borderColor: 'white',
  },
});
