import { useState } from 'react';
import { createPassword } from '../utils/passwordUtils';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characters = '';

    const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
    const numbersString = '0123456789';
    const symbolsString = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (lowerCase) {
      characters += lowerCaseString;
    }
    if (upperCase) {
      characters += upperCaseString;
    }
    if (numbers) {
      characters += numbersString;
    }
    if (symbols) {
      characters += symbolsString;
    }
    if (characters.length === 0) {
      characters = lowerCaseString;
    }

    const passwordResult = createPassword(characters, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const resetPassword = () => {
    if (isPassGenerated) {
      setPassword('');
      setIsPassGenerated(false);
      setLowerCase(true);
      setUpperCase(false);
      setNumbers(false);
      setSymbols(false);
    }
  };

  return {
    password,
    isPassGenerated,
    lowerCase,
    setLowerCase,
    upperCase,
    setUpperCase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
    generatePasswordString,
    resetPassword,
  };
};