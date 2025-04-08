type Currency = {
  name: string;
  value: number;
  flag: string;
  symbol: string;
};

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

type convertCurrencyProps = {
  inputValue: string;
  targetCurrency: Currency;
};

type ListProps = {
  targetCurrency: string;
  buttonPressed: (targetValue: Currency) => void;
};

type CurrencyInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};
