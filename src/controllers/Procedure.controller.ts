import { Request, Response } from 'express';
import Service from '../services/Procedure.service';

const createProcedure = async (req: Request, res: Response) => {
  const procedure = await Service.createProcedure(req.body);

  return res.status(201).json(procedure);
};

export default {
  createProcedure,
};
