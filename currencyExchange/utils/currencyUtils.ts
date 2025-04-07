export const convertCurrency = ({
  inputValue,
  targetCurrency,
}: convertCurrencyProps) => {
  const inputAmount = parseFloat(inputValue);
  if (!isNaN(inputAmount)) {
    const convertedValue = inputAmount * targetCurrency.value;
    return {
      success: true,
      result: `${targetCurrency.symbol} ${convertedValue.toFixed(2)}`,
      targetCurrencyName: targetCurrency.name,
    };
  }
  return {
    success: false,
    error: 'Invalid input',
  };
};
