import { Request, Response } from 'express';
import Service from '../services/Treatment.service';

const createTreatment = async (req: Request, res: Response) => {
  const payment = await Service.createTreatment(req.body);

  return res.status(201).json(payment);
};

const getAllTreatments = async (req: Request, res: Response) => {
  const payments = await Service.getAllTreatments();

  return res.status(200).json(payments);
};

const getTreatmentByPeriod = async (req: Request, res: Response) => {
  const { initialDate, finalDate } = req.query;
  const payment = await Service.getTreatmentByPeriod(
    initialDate as string,
    finalDate as string,
  );

  return res.status(200).json(payment);
};
export default {
  createTreatment,
  getAllTreatments,
  getTreatmentByPeriod,
};
