import Payment from '../database/models/Payment';
import Patient from '../database/models/Patient';
import { IPatient } from './interface/Patient.interface';
import { errorBase } from '../utils/errorBase';

const createNewPatient = async (data: IPatient): Promise<Patient> => {
  const { name, email, phone, document } = data;
  const patientExist = await Patient.findOne({ where: { document } });

  if (patientExist) {
    throw errorBase(409, 'Patient already exists');
  }

  const patient = await Patient.create({ name, email, phone, document });

  return patient;
};

const getPatientById = async (id: number): Promise<Patient> => {
  const patient = await Patient.findOne({
    where: { id },
    include: [{ model: Payment, as: 'idPatient' }],
  });

  if (!patient) {
    throw errorBase(404, 'Patient not found');
  }

  return patient;
};

export default {
  createNewPatient,
  getPatientById,
};
