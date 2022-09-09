import Cookies from 'js-cookie';
import { api } from '../api/api';
import { SignInDataType } from './types';
import jwt_decoded from 'jwt-decode';

export const loginRequest = async ({ email, password }: SignInDataType) => {
  const response = await api.post('/login', { email, password });
  Cookies.set('ut', response.data.token);
  return response.data;
};

export const requestPatientByDocument = async (cpf: string) => {
  const token = Cookies.get('ut');
  const response = await api.get(`/patients/document?cpf=${cpf}`, {
    headers: {
      Authorization: token as string,
    },
  });

  return response.data;
};

export const requestTreatmentPost = async (data: any) => {
  const token = Cookies.get('ut');
  const response = await api.post('/treatments', data, {
    headers: {
      Authorization: token as string,
    },
  });

  return response;
};

export const requestSumTreatmentGet = async (initialDate: string, finalDate: string) => {
  const token = Cookies.get('ut');
  const response = await api.get(
    `/treatments/search?initialDate='${initialDate}'&finalDate='${finalDate}'`,
    {
      headers: {
        Authorization: token as string,
      },
    },
  );
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

  return t.data.imageUrl;
}
