import { View } from 'react-native';
import InputComponent from '../Input';

export default function FormGroupComponent() {
  return (
    <View>
      <InputComponent placeholder="Nome Completo" />
      <InputComponent placeholder="Senha" />
      <InputComponent placeholder="Confirmar Senha" />
      <InputComponent placeholder="Email" />
    </View>
  );
}
