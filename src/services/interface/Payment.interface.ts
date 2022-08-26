export interface IPayment {
  title: string;
  paymentMethod: string;
  installmentAmount: number;
  valueOfPlots: number;
  totalPayment: number;
  patientId: number;
}
