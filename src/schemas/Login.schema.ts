import * as Yup from 'yup';

export const loginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('E-mail deve esta no padrão correto!')
    .required('O e-mail é obrigatŕoio!'),
  password: Yup.string()
    .min(6, 'A senha tem que ter pelo menos 6 caracteres')
    .required('Senha obrigatória!'),
});
