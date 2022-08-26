import { isCelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';
import { ErrorBase } from '../utils/errorBase';

export const handleError = (
  err: ErrorBase,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (isCelebrateError(err)) {
    const result = { message: '' };
    for (const [segment, joiError] of err.details.entries()) {
      result.message = joiError.details[0].message;
    }
    return res.status(400).json({
      message: result.message,
    });
  }

  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Intenral server errror' });
};
