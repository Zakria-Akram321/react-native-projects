import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from '../styles/styles';

interface CheckboxOptionProps {
  isChecked: boolean;
  text: string;
  onPress: () => void;
  fillColor: string;
}

export const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  isChecked,
  text,
  onPress,
  fillColor,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <BouncyCheckbox
        useBuiltInState
        isChecked={isChecked}
        text={text}
        onPress={onPress}
        fillColor={fillColor}
        iconStyle={{ borderColor: '#5DA3FA' }}
        textStyle={{ fontSize: 15, color: '#758283' }}
        style={{ marginBottom: 10 }}
      />
    </View>
  );
};