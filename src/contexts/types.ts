import { ReactNode } from 'react';

export interface SignInDataType {
  email: string;
  password: string;
}

export interface State {
  password: string;
  showPassword: boolean;
}

export interface IUser {
  token: string | undefined;
}

export interface IContext {
  signIn: ({ email, password }: SignInDataType) => void;
  logout: () => void;
  user: IUser;
  setUser: (newState: IUser) => void;
}

export interface IChildrenProps {
  children: ReactNode;
}

export interface IPatient {
  id: number;
  name: string;
  email: string;
  phone: string;
  document: string;
}

export interface ITreatment {
  id: number;
  name: string;
  patient_id: number;
  start_date: string;
  in_cash: number;
  value_of_plots: number;
}

export interface IIncome {
  treatment: ITreatment[];
  total: number;
}
