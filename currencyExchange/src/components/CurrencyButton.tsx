import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

const CurrencyButton = (props: CurrencyButtonProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#000',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#000',
  },
});
