export interface IPayment {
  paymentMethod: string;
  installmentAmount: number;
  valueOfPlots: number;
  totalPayment: number;
  patientId: number;
}
