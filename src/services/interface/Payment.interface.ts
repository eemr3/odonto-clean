export interface IPayment {
  title: string;
  paymentMethod: string;
  installmentAmount: number;
  startDate: string;
  valueOfPlots: number;
  totalPayment: number;
  patientId: number;
}
