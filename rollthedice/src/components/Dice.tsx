import {View, Text, Image} from 'react-native';
import React from 'react';
import {DiceProps} from '../types';
import {styles} from '../styles';

const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};
 
export default Dice;
