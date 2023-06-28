import { Text, View, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  placeholder: string,
}

export default function InputComponent({placeholder}: InputProps) {
  return (
    <View style={styled.container}>
      <TextInput style={styled.textInput} placeholder={placeholder}  placeholderTextColor='#fff'/>
    </View>
  );
}


const styled = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 25,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#92C3B1',
    color: '#fff',
    height: 60,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
  },
});
