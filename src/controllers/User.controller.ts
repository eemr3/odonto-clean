import { Request, Response } from 'express';
import { createNewUser } from '../services/User.service';

export const createUser = async (req: Request, res: Response) => {
  const user = await createNewUser(req.body);

  return res.status(201).json(user);
};
