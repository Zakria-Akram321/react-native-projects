// src/components/PasswordForm.tsx
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {PasswordSchema} from '../constants/validations';
import {CheckboxOption} from './CheckboxOption';
import {styles} from '../styles/styles';

interface PasswordFormProps {
  lowerCase: boolean;
  setLowerCase: (value: boolean) => void;
  upperCase: boolean;
  setUpperCase: (value: boolean) => void;
  numbers: boolean;
  setNumbers: (value: boolean) => void;
  symbols: boolean;
  setSymbols: (value: boolean) => void;
  onGeneratePassword: (length: number) => void;
  onReset: () => void;
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
  lowerCase,
  setLowerCase,
  upperCase,
  setUpperCase,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
  onGeneratePassword,
  onReset,
}) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Password Generator</Text>
      <Formik
        initialValues={{passwordLength: 0}}
        onSubmit={values => {
          onGeneratePassword(values.passwordLength);
        }}
        validationSchema={PasswordSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isValid,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Password Length:</Text>
              <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                onChangeText={handleChange('passwordLength')}
                onBlur={handleBlur('passwordLength')}
                value={values.passwordLength.toString()}
              />
            </View>
            {errors.passwordLength && touched.passwordLength && (
              <Text style={styles.errorText}>{errors.passwordLength}</Text>
            )}

            <CheckboxOption
              isChecked={lowerCase}
              text="Lowercase"
              onPress={() => setLowerCase(!lowerCase)}
              fillColor="#29AB87"
            />

            <CheckboxOption
              isChecked={upperCase}
              text="Uppercase"
              onPress={() => setUpperCase(!upperCase)}
              fillColor="#FED85D"
            />

            <CheckboxOption
              isChecked={numbers}
              text="Numbers"
              onPress={() => setNumbers(!numbers)}
              fillColor="#C9A0DC"
            />

            <CheckboxOption
              isChecked={symbols}
              text="Symbols"
              onPress={() => setSymbols(!symbols)}
              fillColor="#FC80A5"
            />

            <View style={styles.formActions}>
              <TouchableOpacity
                disabled={!isValid}
                style={styles.primaryBtn}
                onPress={handleSubmit as any}>
                <Text style={styles.primaryBtnTxt}>Generate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={() => {
                  handleReset();
                  onReset();
                }}>
                <Text style={styles.secondaryBtnTxt}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
