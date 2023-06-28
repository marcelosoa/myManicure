import { Text, View, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  placeholder: string,
}

export default function InputComponent({placeholder}: InputProps) {
  return (
    <View style={styled.container}>
      <TextInput style={styled.textInput} placeholder={placeholder} />
    </View>
  );
}


const styled = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 10,
  },
  textInput: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
