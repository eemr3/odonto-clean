import Payment from '../database/models/Payment';
import { IPayment } from './interface/Payment.interface';

const createNewPayment = async (data: IPayment): Promise<Payment> => {
  const { title, paymentMethod, installmentAmount, valueOfPlots, patientId } = data;
  const calcValue = valueOfPlots / installmentAmount;

  const calcTotal = installmentAmount * calcValue;

  const payment = await Payment.create({
    title,
    paymentMethod,
    installmentAmount,
    valueOfPlots: calcValue,
    totalPayment: calcTotal,
    patientId,
  });

  return payment;
};

const getAllPayment = async () => {
  const payments = await Payment.findAll();

  return payments;
};

export default {
  createNewPayment,
  getAllPayment,
};
