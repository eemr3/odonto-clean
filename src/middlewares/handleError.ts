import { Request, Response, NextFunction } from 'express';
import { ErrorBase } from '../utils/errorBase';

export const handleError = (
  err: ErrorBase,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Intenral server errror' });
};
