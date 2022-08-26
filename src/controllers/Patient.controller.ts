import { Request, Response } from 'express';
import Service from '../services/Patient.service';

const createPatient = async (req: Request, res: Response) => {
  const client = await Service.createNewPatient(req.body);

  return res.status(201).json(client);
};

const getPatientById = async (req: Request, res: Response) => {
  const patient = await Service.getPatientById(Number(req.params.id));

  return res.status(200).json(patient);
};

export default {
  createPatient,
  getPatientById,
};
