import { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';

export const ProtecteRoute = ({ children }: { children: ReactNode }) => {
  const cookie = Cookie.get('ut');

  if (!cookie) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};
