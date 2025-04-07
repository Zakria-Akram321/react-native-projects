import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {styles} from '../styles';

const ResetButton = ({onReset}: {onReset: () => void}) => {
  return (
    <View style={styles.resetButtonContainer}>
      <Pressable onPress={onReset} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default ResetButton;
