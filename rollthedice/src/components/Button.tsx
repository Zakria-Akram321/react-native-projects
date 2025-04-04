import {Text, Pressable} from 'react-native';
import React from 'react';
import {ButtonProps} from '../types';
import { styles } from '../styles';

const Button = ({onPress, title}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.rollDiceBtnText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
