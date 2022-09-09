import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IPatient } from '../contexts/types';
import { requestPatientByDocument } from '../contexts/utils';
import { searchSchema } from '../schemas/Search.schema';

function SearchPatient() {
  const history = useHistory();
  const [patientExists, setPatientExists] = useState(true);
  const [patientData, setPatientData] = useState<IPatient | null>(null);
  const [messageError, setMessageError] = useState('');

  const handleGetPatient = async (cpf: string) => {
    try {
      const response = await requestPatientByDocument(cpf);
      setPatientData(response);
      setPatientExists(true);
    } catch (error) {
      if ((error as AxiosError).response?.status === 404) {
        setPatientData(null);
        setPatientExists(false);
        setMessageError('Este paciente não foi encontrado.');
      }
    }
  };

  const handleToSchedule = (id: any) => {
    history.push(`/dental-treatment/${id}`);
  };

  const formik = useFormik({
    initialValues: {
      cpf: '',
    },
    validationSchema: searchSchema,
    onSubmit: (values) => {
      handleGetPatient(values.cpf);
    },
  });

  return (
    <div>
      <h2 className="text-center text-3xl mb-5 mt-5">Pesquisar paciente</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center m-auto px-2 lg:container">
        <label htmlFor="cpf" className="w-full lg:w-2/5 lg:flex flex-col">
          Digite o número do CPF
          <input
            id="cpf"
            type="text"
            placeholder="Ex: 12345678901"
            name="cpf"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            className="px-3 py-3 placeholder-slate-400 text-slate-600 relative
             bg-white rounded text-sm border border-slate-300 outline-none
              focus:outline-none focus:ring w-full"
          />
        </label>
        {formik.touched && formik.errors.cpf && (
          <span className="text-red-700 mt-1">{formik.errors.cpf}</span>
        )}
        <button
          className="w-full my-5 lg:w-1/5 text-fuchsia-500 border border-fuchsia-500
           hover:bg-fuchsia-500 hover:text-white active:bg-fuchsia-600
            font-bold uppercase text-sm px-6 py-2 rounded outline-none 
            focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit">
          Pesquisar
        </button>
      </form>
      <div className="flex flex-col justify-center items-center m-auto px-2 lg:container my-4">
        {patientExists ? (
          ''
        ) : (
          <div>
            <p className="flex flex-col items-center">
              {messageError}{' '}
              <Link className="text-blue-600" to="/register">
                Deseja cadastrá-lo?
              </Link>
            </p>
          </div>
        )}
        {patientData === null ? (
          ''
        ) : (
          <div className="w-full lg:w-2/5 bg-fuchsia-50 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{patientData.name}</div>
              <p className="text-gray-500 text-base mb-2">{patientData.document}</p>
              <p className="text-gray-500 text-base mb-2">{patientData.phone}</p>
              <p className="text-gray-500 text-base mb-2">{patientData.email}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span
                onClick={() => handleToSchedule(patientData.id)}
                className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Agendar tratamento
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPatient;
