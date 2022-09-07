import { sign, verify } from 'jsonwebtoken';
import { readFile } from '../utils/readFileKey';

export const generateToken = (name: string, email: string, imageUrl: string) => {
  const token = sign({ data: { name, email, imageUrl } }, readFile(), {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export const decodedToken = (token: string) => {
  const SECRET = readFile();
  try {
    const decoded = verify(token, SECRET);
    return decoded;
  } catch (error) {
    return false;
  }
};
