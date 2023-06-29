import { useState } from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, InputText } from './styled';

interface InputProps {
  placeholder: string,
  iconName?: React.ComponentProps<typeof FontAwesome>['name']
}

export default function InputComponent({ placeholder }: InputProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Container>
      <InputText
      hasError={hasError}
      isFilled={isFilled}
      isFocused={isFocused}
      placeholder={placeholder}
      placeholderTextColor="#fff"
      />
    </Container>
  );
}
