import * as Yup from 'yup';

export const searchSchema = Yup.object().shape({
  cpf: Yup.string()
    .min(11, 'O CPF dever ter no minimo 11 numeros')
    .max(11, 'O CPF deve ter no maximo 11 numeros')
    .required('Campo CPF é obrigatório'),
});
