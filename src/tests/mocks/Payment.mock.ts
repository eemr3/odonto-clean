export const responsePaymentMock = [
  {
    id: 1,
    title: 'Extração simples',
    paymentMethod: 'parcelado',
    installmentAmount: 3,
    valueOfPlots: 50,
    totalPayment: 150,
    startDate: '2022-08-26',
    patientId: 1,
  },
  {
    id: 2,
    title: 'Obturação dupla',
    paymentMethod: 'a vista',
    installmentAmount: 1,
    valueOfPlots: 750,
    totalPayment: 750,
    startDate: '2022-08-26',
    patientId: 2,
  },
  {
    id: 3,
    title: 'Extração dupla',
    paymentMethod: 'a vista',
    installmentAmount: 3,
    valueOfPlots: 300,
    totalPayment: 2700,
    startDate: '2022-08-26',
    patientId: 2,
  },
];

export const payloadPaymentMock = {
  title: 'Extração simples',
  paymentMethod: 'parcelado',
  installmentAmount: 3,
  valueOfPlots: 150.0,
  patientId: 1,
};

export const responsePaymentCreateMock = {
  startDate: '2022-08-26',
  id: 1,
  title: 'Extração simples',
  paymentMethod: 'parcelado',
  installmentAmount: 3,
  valueOfPlots: 50,
  totalPayment: 150,
  patientId: 1,
};
