import React from 'react';
import {View} from 'react-native';
import Dice from './components/Dice';
import Button from './components/Button';
import {useDice} from './hooks/useDice';
import { styles } from './styles';

function App(): React.JSX.Element {
  const {diceImage, rollDiceOnTop} = useDice();

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Button onPress={rollDiceOnTop} title="Roll the Dice" />
    </View>
  );
}

export default App;
