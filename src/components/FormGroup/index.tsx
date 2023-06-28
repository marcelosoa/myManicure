import { View } from 'react-native';
import InputComponent from '../Input';

interface FormGroupComponent {
  placeholder: string
}

export default function FormGroupComponent({ placeholder }: FormGroupComponent) {
  return (
    <View>
      <InputComponent placeholder={placeholder}/>
    </View>
  );
}
