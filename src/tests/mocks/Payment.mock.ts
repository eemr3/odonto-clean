export const responsePaymentMock = [
  {
    id: 1,
    title: 'Extração com limpeza',
    paymentMethod: 'avista',
    inCash: 200,
    startDate: '2022-09-06',
    patientId: 1,
  },
  {
    id: 2,
    title: 'Obturação',
    paymentMethod: 'avista',
    inCash: 350,
    startDate: '2022-09-06',
    patientId: 2,
    idPayment: [],
  },
];

export const payloadPaymentMock = {
  title: 'Extração simples',
  paymentMethod: 'parcelado',
  installmentAmount: 1,
  valueOfPlots: 150.0,
  patientId: 1,
};

export const responsePaymentCreateMock = {
  id: 1,
  title: 'Obturação',
  paymentMethod: 'avista',
  inCash: 350,
  startDate: '2022-09-06',
  patientId: 1,
};
