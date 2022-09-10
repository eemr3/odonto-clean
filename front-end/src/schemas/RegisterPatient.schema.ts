import * as Yup from 'yup';

export const registerPatientSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'O nome tem que ter no mínimo 3 caracteres')
    .required('O campo de nome é obrigatório'),
  email: Yup.string()
    .email('Entre com um e-mail válido!')
    .required('O campo e-mail é obrigatório'),
  phone: Yup.string()
    .min(11, 'O telefone tem que ter no mínimo 11 números')
    .max(11, 'O telefone tem que ter no máximo 11 números')
    .required('O campo telefone é obrigatório'),
  document: Yup.string()
    .min(11, 'O CPF dever ter no mínimo 11 números')
    .max(11, 'O CPF deve ter no máximo 11 números')
    .required('O campo CPF é obrigatório'),
});
