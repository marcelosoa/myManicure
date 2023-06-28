import { TouchableOpacity, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string
  onPress?: () => void,
  style?: StyleProp<ViewStyle>,
}

export default function ButtonComponent({ label, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styled.touchable}
      onPress={onPress}
    >
      <Text style={styled.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
  touchable: {
    width: '60%',
    backgroundColor: '#92C3B1',
    height: 60,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
  },
});
