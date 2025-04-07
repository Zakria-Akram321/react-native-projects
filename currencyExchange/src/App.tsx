import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {styles} from './styles';
import List from './components/List';
import {useCurrencyConverter} from '../hooks/useCurrencyConverter';
import ResultDisplay from './components/ResultDisplay';
import ResetButton from './components/ResetButton';
import {CurrencyInput} from './components/CurrencyInput';

function App(): React.JSX.Element {
  const {
    inputValue,
    setInputValue,
    result,
    targetCurrency,
    handleConversion,
    resetConverter,
  } = useCurrencyConverter();

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <CurrencyInput value={inputValue} onChangeText={setInputValue} />
          <ResultDisplay result={result} />
        </View>
        <List
          targetCurrency={targetCurrency}
          buttonPressed={handleConversion}
        />
        <ResetButton onReset={resetConverter} />
      </View>
    </>
  );
}

export default App;
