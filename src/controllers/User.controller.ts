import { Request, Response } from 'express';
import { ErrorBase } from '../utils/errorBase';
import Service from '../services/User.service';

const createUser = async (req: Request, res: Response) => {
  const user = await Service.createNewUser(req.body);
  return res.status(201).json(user);
};

export default {
  createUser,
};
