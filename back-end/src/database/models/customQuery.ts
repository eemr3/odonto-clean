import Treatment from './Treatment';
export const querySumTreatmentByPeriod = async (
  initialDate: string,
  finalDate: string,
) => {
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

export const queryfindTreatmentByPeriod = async (
  initialDate: string,
  finalDate: string,
) => {
  const [results]: any = await Treatment.sequelize?.query(`
  SELECT
    pte.name,
    tr.id,
    tr.treatment,
    tr.start_date,
    tr.in_cash,
    tr.patient_id
    FROM patients pte
        INNER JOIN treatments as tr ON pte.id = tr.patient_id
    WHERE
        tr.start_date >= ${initialDate}
        AND tr.start_date <= ${finalDate}
    GROUP BY
        pte.name,
        tr.id,    
        tr.patient_id
    ORDER BY tr.start_date ASC;`);

  return results;
};
