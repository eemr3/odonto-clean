import * as Yup from 'yup';

export const incomeSchema = Yup.object().shape({
  initialDate: Yup.date().required('É obrigatório selecionar uma data'),
  finalDate: Yup.date().required('É obrigatório selecionar uma data'),
});
