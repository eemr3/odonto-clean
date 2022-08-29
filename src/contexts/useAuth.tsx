import { useContext } from 'react';
import { AppContext } from './Context';

export const useAuth = () => {
  const context = useContext(AppContext);

  return context;
};
