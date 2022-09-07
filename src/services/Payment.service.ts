import PaymentDateValue from '../database/models/paymentdatevalue';
import Payment from '../database/models/Payment';
import { IPayment } from './interface/Payment.interface';
import { calcularParcelas } from '../utils/generateDates';
import { queryPaymentByPeriod } from '../database/models/customQuery';

const createNewPayment = async (data: IPayment): Promise<Payment> => {
  const { title, paymentMethod, installmentAmount, valueOfPlots, patientId } = data;
  const date = new Date();
  const calcValue = [];
  const dates = calcularParcelas(installmentAmount - 1, date.toLocaleDateString());

  for (let index = 0; index < installmentAmount - 1; index += 1) {
    calcValue.push(valueOfPlots / installmentAmount);
  }
  const totalInCash = valueOfPlots / installmentAmount;
  const payment = await Payment.create({
    title,
    paymentMethod,
    inCash: totalInCash,
    patientId,
  });
  const installment = installmentAmount - 1;
  await Promise.all(
    calcValue.map((item, index) => {
      PaymentDateValue.create({
        installmentAmount: installment,
        valueOfPlots: item,
        installmentDate: dates[index],
        paymentId: payment.id,
      });
    }),
  );

  return payment;
};

const getAllPayment = async () => {
  const payments = await Payment.findAll({
    include: [{ model: PaymentDateValue, as: 'idPayment' }],
  });

  return payments;
};

const getPaymentByPeriod = async (initialDate: string, finalDate: string) => {
  console.log(initialDate, finalDate);

  const payment = await queryPaymentByPeriod(initialDate, finalDate);

  return { payment: Number(payment.total_recebido_cash) + Number(payment.pdv) };
};

export default {
  createNewPayment,
  getAllPayment,
  getPaymentByPeriod,
};
