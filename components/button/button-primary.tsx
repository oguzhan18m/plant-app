import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
} from 'react-native';

type Props = TouchableOpacityProps & {
  key?: string;
  label: string;
  onPress: () => void;
  style?: any;
};

export default function PrimaryButton({
  label,
  onPress,
  key,
  style: btnStyle,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={key}
      activeOpacity={0.7}
      style={{...btnStyle, ...styles.btn}}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 12,
    backgroundColor: '#28AF6E',
    paddingVertical: 16,
    paddingHorizontal: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.24,
  },
});
