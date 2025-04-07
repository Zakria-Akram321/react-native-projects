import React from 'react';
import {Text} from 'react-native';
import {styles} from '../styles';

const ResultDisplay = ({result}: {result: string}) => {
  if (!result) return null;
  return <Text style={styles.resultTxt}>{result}</Text>;
};

export default ResultDisplay;
