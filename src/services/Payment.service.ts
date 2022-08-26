import Payment from '../database/models/Payment';

const createNewPayment = async (data: any) => {
  const payment = await Payment.create(data);

  return payment;
};

export default {
  createNewPayment,
};
