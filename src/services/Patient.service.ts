import Treatment from '../database/models/Treatment';
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
    include: [{ model: Treatment, as: 'treatments' }],
  });

  if (!patient) {
    throw errorBase(404, 'Patient not found');
  }

  return patient;
};

const getPatientByDocument = async (cpf: string) => {
  const patient = await Patient.findOne({
    where: { document: cpf },
    include: [{ model: Treatment, as: 'treatments' }],
  });

  if (!patient) {
    throw errorBase(404, 'Patient not found');
  }

  return patient;
};

export default {
  createNewPatient,
  getPatientById,
  getPatientByDocument,
};
