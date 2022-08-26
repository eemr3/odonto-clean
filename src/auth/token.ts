import { sign, verify } from 'jsonwebtoken';
import { readFile } from '../utils/readFileKey';

export const generateToken = (name: string, email: string) => {
  const token = sign({ data: { name, email } }, readFile(), {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  return token;
};

export const decodedToken = (token: string) => {
  try {
    const decoded = verify(token, readFile());
    return decoded;
  } catch (error) {
    return false;
  }
};
