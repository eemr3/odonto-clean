import Payment from '../database/models/Payment';
import Patient from '../database/models/Patient';

const createNewPatient = async (data: any) => {
  const client = await Patient.create(data);

  return client;
};

const getPatientById = async (id: number) => {
  const patient = await Patient.findOne({
    where: { id },
    include: [{ model: Payment, as: 'idPatient' }],
  });

  return patient;
};

export default {
  createNewPatient,
  getPatientById,
};
