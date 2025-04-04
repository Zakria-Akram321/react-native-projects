import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../styles/styles';
import {PasswordForm} from '../components/PasswordForm';
import {PasswordDisplay} from '../components/PasswordDisplay';
import {usePasswordGenerator} from '../hooks/usePasswordGenerator';

const PasswordGeneratorScreen: React.FC = () => {
  const {
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
  } = usePasswordGenerator();

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <PasswordForm
          lowerCase={lowerCase}
          setLowerCase={setLowerCase}
          upperCase={upperCase}
          setUpperCase={setUpperCase}
          numbers={numbers}
          setNumbers={setNumbers}
          symbols={symbols}
          setSymbols={setSymbols}
          onGeneratePassword={generatePasswordString}
          onReset={resetPassword}
        />
        {isPassGenerated ? <PasswordDisplay password={password} /> : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordGeneratorScreen;
