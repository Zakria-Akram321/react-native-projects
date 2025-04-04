import {ImageSourcePropType} from 'react-native';
import {diceImages} from '../data/diceData';
import {useState} from 'react';

export function useDice() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(
    diceImages[0],
  );
  const rollDiceOnTop = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceImage(diceImages[randomNumber - 1]);
  };
  return {diceImage, rollDiceOnTop};
}
