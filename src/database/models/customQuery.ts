import Treatment from './Treatment';
export const queryTreatmentByPeriod = async (initialDate: string, finalDate: string) => {
  const [results]: any = await Treatment.sequelize?.query(
    `SELECT
  SUM("in_cash") as total_recebido_cash, (SELECT SUM("value_of_plots") as parcelas_a_receber
        FROM treatment_date_values WHERE "installment_date" BETWEEN ${initialDate} and ${finalDate}
  ) as pdv FROM treatments WHERE "start_date" BETWEEN ${initialDate} and ${finalDate}`,
    {
      mapToModel: true,
    },
  );

  return results[0];
};
