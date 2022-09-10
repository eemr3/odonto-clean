import { useContext } from 'react';
import FormIncome from '../components/FormIncome';
import NavBar from '../components/NavBar';
import TableIncome from '../components/TableIncome';
import { AppContext } from '../contexts/AppContext';
function MyIncome() {
  const { incomeData } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="container m-auto">
        <FormIncome />
        <div className="flex items-center 2xl:ml-14 lg:ml-10 mt-4 px-2">
          <h4 className="font-semibold mr-4">Total faturado</h4>
          <div className="text-lg font-semibold text-slate-500">
            {incomeData?.total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </div>
        <TableIncome />
      </div>
    </>
  );
}

export default MyIncome;
