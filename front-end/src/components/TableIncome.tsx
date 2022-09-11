import { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';

function TableIncome() {
  const { incomeData, setIncomeData } = useContext(AppContext);

  useEffect(() => {
    setIncomeData(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="lg:w-11/12 m-auto">
        <div className="w-full">
          <div className="lg:max-w-full m-0 overflow-x-auto">
            <table className="m-0 table-auto w-full">
              <thead>
                <tr className="bg-fuchsia-800 text-center">
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Nome
                  </th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Tratamento
                  </th>
                  <th className="w-1/12 min-w-[195px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Início do tratamento
                  </th>
                  <th className="w-1/6 min-w-[195px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Valor em dinheiro
                  </th>
                </tr>
              </thead>
              <tbody>
                {incomeData?.treatment.map((item) => (
                  <tr key={item.patient_id}>
                    <td className="max-w-xs text-center truncate text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item.name}
                    </td>
                    <td className="max-w-sm truncate text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item.treatment}
                    </td>
                    <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {new Date(item.start_date).toLocaleDateString('pt-BR', {
                        timeZone: 'UTC',
                      })}
                    </td>
                    <td className="max-w-sm truncate text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {Number(item.in_cash).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableIncome;
