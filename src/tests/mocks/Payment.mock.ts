export const responsePaymentMock = [
  {
    id: 1,
    paymentMethod: 'a vista',
    installmentAmount: 1,
    valueOfPlots: 500,
    totalPayment: 500,
    startDate: '2022-08-26',
    patientId: 1,
  },
  {
    id: 2,
    paymentMethod: 'a vista',
    installmentAmount: 1,
    valueOfPlots: 750,
    totalPayment: 750,
    startDate: '2022-08-26',
    patientId: 2,
  },
  {
    id: 3,
    paymentMethod: 'a vista',
    installmentAmount: 3,
    valueOfPlots: 300,
    totalPayment: 2700,
    startDate: '2022-08-26',
    patientId: 2,
  },
  {
    id: 4,
    paymentMethod: 'a vista',
    installmentAmount: 3,
    valueOfPlots: 300,
    totalPayment: 900,
    startDate: '2022-08-26',
    patientId: 2,
  },
  {
    id: 5,
    paymentMethod: 'parcelado',
    installmentAmount: 3,
    valueOfPlots: 333.3333333333333,
    totalPayment: 1000,
    startDate: '2022-08-26',
    patientId: 1,
  },
];

export const payloadPaymentMock = {
  paymentMethod: 'parcelado',
  installmentAmount: 3,
  valueOfPlots: 1000.0,
  patientId: 1,
};

export const responsePaymentCreateMock = {
  startDate: '2022-08-26',
  id: 1,
  paymentMethod: 'parcelado',
  installmentAmount: 3,
  valueOfPlots: 333.3333333333333,
  totalPayment: 1000,
  patientId: 1,
};
