import { NextFunction, Request, Response } from 'express';
import { decodedToken } from '../auth/token';

interface IToken {
  data: {
    name: string;
    email: string;
  };
}

interface RequestWithUserRole extends Request {
  data?: {
    name: string;
    email: string;
  };
}

export const authMiddleware = (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ message: 'Token not found' });
  }

  const { data } = decodedToken(token) as IToken;

  if (!data) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  req.data = data;

  next();
};
