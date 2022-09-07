import Cookies from 'js-cookie';
import { api } from '../api/api';
import { SignInDataType } from './types';
import jwt_decoded from 'jwt-decode';

export const loginRequest = async ({ email, password }: SignInDataType) => {
  const response = await api.post('/login', { email, password });
  Cookies.set('ut', response.data.token);
  return response.data;
};
type TokenData = {
  data: {
    email: string;
    name: string;
    imageUrl: string;
  };
};
export function getPayload(token: string) {
  const t = jwt_decoded(token) as TokenData;
  console.log(t.data.imageUrl);
}
