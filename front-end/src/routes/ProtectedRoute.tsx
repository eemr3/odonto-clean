import { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export const ProtecteRoute = ({ children }: { children: ReactNode }) => {
  const cookie = Cookies.get('ut');

  if (!cookie) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
};
