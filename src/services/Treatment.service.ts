import TreatmentDateValue from '../database/models/treatmentdatevalue';
import Treatment from '../database/models/Treatment';
import { ITreatment } from './interface/Treatment.interface';
import { calcularParcelas } from '../utils/generateDates';
import {
  queryfindTreatmentByPeriod,
  querySumTreatmentByPeriod,
} from '../database/models/customQuery';

const createTreatment = async (data: ITreatment): Promise<Treatment> => {
  const {
    treatment,
    paymentMethod,
    installmentAmount,
    startDate,
    valueOfPlots,
    patientId,
  } = data;

  const calcValue = [];
  const dates = calcularParcelas(installmentAmount - 1, startDate);
  console.info('service', startDate);

  console.info('service', dates);

  if (installmentAmount > 0) {
    for (let index = 0; index < installmentAmount - 1; index += 1) {
      calcValue.push(valueOfPlots / installmentAmount);
    }
  }
  const totalInCash =
    installmentAmount > 0 ? valueOfPlots / installmentAmount : valueOfPlots;
  const treatmentResult = await Treatment.create({
    treatment,
    paymentMethod,
    inCash: totalInCash,
    startDate,
    patientId,
  });
  const installment = installmentAmount - 1;
  await Promise.all(
    calcValue.map((item, index) => {
      TreatmentDateValue.create({
        installmentAmount: installment,
        valueOfPlots: item,
        installmentDate: dates[index],
        treatmentId: treatmentResult.id,
      });
    }),
  );

  return treatmentResult;
};

const getAllTreatments = async () => {
  const payments = await Treatment.findAll({
    include: [{ model: TreatmentDateValue, as: 'treatmentsValues' }],
    order: [['id', 'ASC']],
  });

  return payments;
};

const getSumTreatmentByPeriod = async (initialDate: string, finalDate: string) => {
  const sumTraitement = await querySumTreatmentByPeriod(initialDate, finalDate);
  const treatment = await queryfindTreatmentByPeriod(initialDate, finalDate);

  return {
    treatment,
    total: Number(sumTraitement.total_recebido_cash) + Number(sumTraitement.pdv),
  };
};

export default {
  createTreatment,
  getAllTreatments,
  getSumTreatmentByPeriod,
};
