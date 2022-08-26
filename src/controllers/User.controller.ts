import { Request, Response } from 'express';
import { ErrorBase } from '../utils/errorBase';
import Service from '../services/User.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await Service.createNewUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status((error as ErrorBase).status)
      .json({ message: (error as Error).message });
  }
};

export default {
  createUser,
};
