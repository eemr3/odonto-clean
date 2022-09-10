import { createContext, useState } from 'react';
import { IAppContext, IChildrenProps, IIncome } from './types';

export const AppContext = createContext<IAppContext>({} as IAppContext);

function AppProvider({ children }: IChildrenProps) {
  const [incomeData, setIncomeData] = useState<IIncome | null>();

  return (
    <AppContext.Provider value={{ incomeData, setIncomeData }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
