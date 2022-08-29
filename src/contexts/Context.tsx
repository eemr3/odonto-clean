import { createContext, ReactNode, useState } from 'react';
import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { IContext, IUser, SignInDataType } from './types';
import { loginRequest } from './utils';

export const AppContext = createContext({} as IContext);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();
  const [user, setUser] = useState<IUser>({} as IUser);

  const signIn = async ({ email, password }: SignInDataType) => {
    try {
      await loginRequest({ email, password });
      history.push('/home');
    } catch (err) {
      if ((err as AxiosError).response?.status === 403) {
        return toast.error('E-mail ou senha inválidos!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const logout = () => {
    Cookies.remove('ut');
    history.push('/login');
  };

  return (
    <AppContext.Provider value={{ signIn, logout, user }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
