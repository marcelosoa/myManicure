import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <TouchableOpacity style={styled.button}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}


const styled = StyleSheet.create({
  button: {
   display: 'flex',
   alignItems: 'center',
   textAlign: 'center',
   marginTop: 25,
   height: 60,
   backgroundColor: 'pink',
   width: '100%',
  },
});
