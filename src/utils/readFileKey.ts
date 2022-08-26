import { readFileSync } from 'fs';

export const readFile = () => {
  const str = readFileSync('./security.key', 'utf-8');

  return str;
};
