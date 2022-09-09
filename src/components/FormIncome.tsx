import { useContext } from 'react';
import { useFormik } from 'formik';
import { requestSumTreatmentGet } from '../contexts/utils';
import { incomeSchema } from '../schemas/Income.schema';
import { AppContext } from '../contexts/AppContext';

type Dates = {
  initialDate: string;
  finalDate: string;
};

function FormIncome() {
  const { setIncomeData } = useContext(AppContext);

  const getIncome = async (values: Dates) => {
    try {
      const response = await requestSumTreatmentGet(values.initialDate, values.finalDate);
      console.log(response);

      setIncomeData(response);
    } catch (error) {
      console.info(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      initialDate: '',
      finalDate: '',
    },
    validationSchema: incomeSchema,
    onSubmit: (values) => {
      getIncome(values);
    },
  });

  return (
    <form
      className="w-full px-1 mt-5 flex flex-col justify-center items-center"
      action=""
      onSubmit={formik.handleSubmit}>
      <div className="lg:w-3/4 grid lg:grid-cols-2 gap-6">
        <label className="w-full" htmlFor="initialDate">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700  leading-tight focus:outline-none 
                 focus:shadow-outline"
            type="date"
            name="initialDate"
            id="initialDate"
            value={formik.values.initialDate}
            onChange={formik.handleChange}
          />
          {formik.touched && formik.errors.initialDate && (
            <span className="text-red-500 text-sm">{formik.errors.initialDate}</span>
          )}
        </label>
        <label className="w-full" htmlFor="finalDate">
          <input
            className="shadow appearance-none border rounded w-full py-2 
                px-3 text-gray-700 leading-tight focus:outline-none 
                focus:shadow-outline"
            type="date"
            name="finalDate"
            id="finalDate"
            value={formik.values.finalDate}
            onChange={formik.handleChange}
          />
          {formik.touched && formik.errors.finalDate && (
            <span className="text-red-500 text-sm">{formik.errors.finalDate}</span>
          )}
        </label>
      </div>
      <div className="my-6">
        <button
          className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white 
              font-bold py-2 px-4 rounded"
          type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default FormIncome;
