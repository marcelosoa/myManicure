import { View, Text, StyleSheet } from 'react-native';
import FormGroupComponent from "../../components/FormGroup";
import Button from '../../utils/Button';

export default function RegisterScreen() {
  return (
    <>
      <View style={styled.container}>
        <Text>Register Screen To Manicure</Text>
        <FormGroupComponent />
        <Button label="Criar Conta" />
      </View>
    </>
  );
}

const styled = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
});


