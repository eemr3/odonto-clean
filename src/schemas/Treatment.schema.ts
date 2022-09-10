import * as Yup from 'yup';

export const treatmentSchema = Yup.object().shape({
  treatment: Yup.string().required('O campo tratamento é obrigatório!'),
  paymentMethod: Yup.string().required(
    'É obrigatórioi selecionar uma forma de pagamento',
  ),
  installmentAmount: Yup.number().required(
    'É obrigatório selecionar a quantidade de parcelas',
  ),
  startDate: Yup.date().required('A data do tratamento é obrigatória'),
  price: Yup.number().required('É obrigatório informar o valor do tratamento'),
});
