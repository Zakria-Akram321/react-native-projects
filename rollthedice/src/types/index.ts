import {PropsWithChildren} from 'react';
import {ImageSourcePropType} from 'react-native';

export type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

export type ButtonProps = {
  title: string;
  onPress: () => void;
};
