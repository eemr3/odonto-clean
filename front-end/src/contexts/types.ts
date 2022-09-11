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
  treatment: string;
}

export interface ISumTraitement {
  total_recebido_cash: number;
  valor_parcelas: number;
}

export interface IIncome {
  treatment: ITreatment[];
  total: number;
  sumTraitement: ISumTraitement;
}

export interface IValuesFormik {
  treatment: string;
  paymentMethod: string;
  installmentAmount: string;
  startDate: string;
  valueOfPlots: number;
  patientId: string;
}

export interface IAppContext {
  setIncomeData: (newState: IIncome | null | undefined) => void;
  incomeData: IIncome | null | undefined;
}

export interface IPatientData {
  name: string;
  email: string;
  phone: string;
  document: string;
}
