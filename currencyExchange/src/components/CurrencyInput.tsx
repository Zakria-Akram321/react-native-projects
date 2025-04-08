import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../styles';

export const CurrencyInput = ({value, onChangeText}: CurrencyInputProps) => {
  return (
    <View style={styles.rupeesContainer}>
      <Text style={styles.rupee}>₹</Text>
      <TextInput
        maxLength={14}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter amount in rupee"
        placeholderTextColor="#fff"
        style={styles.whiteText}
      />
    </View>
  );
};
