import { Request, Response } from 'express';
import Service from '../services/Login.service';

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await Service.signIn(email, password);

  return res.status(200).json(token);
};

export default {
  signIn,
};
