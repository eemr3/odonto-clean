import Payment from './Payment';
export const queryPaymentByPeriod = async (initialDate: string, finalDate: string) => {
  const [results]: any = await Payment.sequelize?.query(
    `SELECT
  SUM("in_cash") as total_recebido_cash, (SELECT SUM("value_of_plots") as parcelas_a_receber
        FROM payment_date_values WHERE "installment_date" BETWEEN ${initialDate} and ${finalDate}
  ) as pdv FROM payments WHERE "start_date" BETWEEN ${initialDate} and ${finalDate}`,
    {
      mapToModel: true,
    },
  );

  return results[0];
};
