export const createPassword = (characters: string, passwordLength: number) => {
  let result = '';
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
