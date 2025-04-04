import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

interface PasswordDisplayProps {
  password: string;
}

export const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  return (
    <View style={[styles.card, styles.cardElevated]}>
      <Text style={styles.subTitle}>Generated Password:</Text>
      <Text style={styles.description}>
        Copy the password to clipboard
      </Text>
      <Text selectable style={styles.generatedPassword}>
        {password}
      </Text>
    </View>
  );
};