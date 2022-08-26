import Payment from '../database/models/Payment';
import { IPayment } from './interface/Payment.interface';

const createNewPayment = async (data: IPayment) => {
  const { paymentMethod, installmentAmount, valueOfPlots, patientId } = data;

  const calcTotal = installmentAmount * valueOfPlots;

  const payment = await Payment.create({
    paymentMethod,
    installmentAmount,
    valueOfPlots,
    totalPayment: calcTotal,
    patientId,
  });

  return payment;
};

export default {
  createNewPayment,
};
