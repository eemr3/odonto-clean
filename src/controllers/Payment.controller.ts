import { Request, Response } from 'express';
import Service from '../services/Payment.service';

const createPayment = async (req: Request, res: Response) => {
  const payment = await Service.createNewPayment(req.body);

  return res.status(201).json(payment);
};

const getAllPayment = async (req: Request, res: Response) => {
  const payments = await Service.getAllPayment();

  return res.status(200).json(payments);
};

export default {
  createPayment,
  getAllPayment,
};
