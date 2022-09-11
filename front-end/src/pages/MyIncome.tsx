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
        <div className="flex flex-col justify-center 2xl:ml-14 lg:ml-10 mb-4 mt-4 px-2">
          <div>
            <div className="text-lg  border-2 mb-1 font-semibold text-slate-500">
              <p>Valor em dinheiro/1ª parcela</p>
              {incomeData?.sumTraitement.total_recebido_cash ? (
                Number(incomeData?.sumTraitement.total_recebido_cash).toLocaleString(
                  'pt-br',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  },
                )
              ) : (
                <div className="text-lg font-semibold text-slate-500">R$ 0</div>
              )}
            </div>
            <div className="text-lg border-2 font-semibold text-slate-500">
              <p>Valor da(s) parcela(s)</p>
              {incomeData?.sumTraitement.valor_parcelas ? (
                Number(incomeData?.sumTraitement.valor_parcelas).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              ) : (
                <div className="text-lg font-semibold text-slate-500">R$ 0</div>
              )}
            </div>
          </div>
          <h4 className="font-semibold mr-4 mt-4">Total faturado</h4>
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
