import { readFileSync } from 'fs';

export const readFile = () => {
  const str = readFileSync('./jwt.evaluation.key', 'utf-8');

  return str;
};
