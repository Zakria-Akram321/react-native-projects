import {useState} from 'react';
import {convertCurrency} from '../utils/currencyUtils';
import {showNotification} from '../utils/notifications';

export const useCurrencyConverter = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const handleConversion = (targetValue: Currency) => {
    if (!inputValue) {
      showNotification({message: 'Enter a value to convert', isSuccess: false});
      return;
    }

    const conversionResult = convertCurrency({
      inputValue: inputValue,
      targetCurrency: targetValue,
    });

    if (conversionResult.success) {
      setResult(conversionResult.result ?? '');
      setTargetCurrency(conversionResult.targetCurrencyName ?? '');
      showNotification({
        message: `Converted to ${conversionResult.targetCurrencyName}`,
      });
    } else {
      showNotification({
        message: conversionResult.error ?? '',
        isSuccess: false,
      });
    }
  };

  const resetConverter = () => {
    setInputValue('');
    setResult('');
    setTargetCurrency('');
  };

  return {
    inputValue,
    setInputValue,
    result,
    targetCurrency,
    handleConversion,
    resetConverter,
  };
};
