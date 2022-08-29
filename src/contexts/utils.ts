import Cookie from 'js-cookie';
import { api } from '../api/api';
import { SignInDataType } from './types';

export const loginRequest = async ({ email, password }: SignInDataType) => {
  const response = await api.post('/login', { email, password });
  Cookie.set('ut', response.data.token);
  return response.data;
};
