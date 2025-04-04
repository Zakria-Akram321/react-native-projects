import * as Yup from 'yup';

export const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Length must be at least 4 characters long')
    .max(16, 'Length must be at most 16 characters long')
    .required('Length is required'),
});
