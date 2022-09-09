import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { requestTreatmentPost } from '../contexts/utils';
import { treatmentSchema } from '../schemas/Treatment.schema';

function FormDentalTreatment() {
  const { id } = useParams();
  const history = useHistory();
  const submitDataTreatment = async (values) => {
    try {
      const response = await requestTreatmentPost(values);
      console.log(response);
      history.push('/home');
    } catch (error) {
      console.info(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      treatment: '',
      paymentMethod: '',
      installmentAmount: '',
      startDate: '',
      price: '',
      patientId: id,
    },
    validationSchema: treatmentSchema,
    onSubmit: (values) => {
      const { treatment, paymentMethod, installmentAmount, startDate, price, patientId } =
        values;
      submitDataTreatment({
        treatment,
        paymentMethod,
        installmentAmount,
        startDate,
        valueOfPlots: Number(price),
        patientId,
      });
    },
  });

  return (
    <div className="container m-auto flex flex-col items-center text-xl lg:text-3xl">
      <h2 className="lg:mt-12 lg:mb-16 mt-5">Agendamento do tratamento</h2>

      <div className="m-auto container md:mt-0">
        <form onSubmit={formik.handleSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="treatment"
                    className="block text-sm font-medium text-gray-700">
                    Tratamento
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formik.values.treatment}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="">Escolha o tratamento</option>
                    <option value="Obturação">Obturação</option>
                    <option value="Extração">Extração</option>
                    <option value="Limpeza bucal">Limpeza bucal</option>
                    <option value="Clareamento">Clareamento</option>
                    <option value="Canal dentário">Canal dentário</option>
                    <option value="Radiografia Panorâmica Dental">
                      Radiografia Panorâmica Dental
                    </option>
                  </select>
                  {formik.touched && formik.errors.treatment && (
                    <span className="text-red-700 mt-1 text-xs">
                      {formik.errors.treatment}
                    </span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700">
                    Data do início do tratamento
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    autoComplete="street-address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched && formik.errors.startDate && (
                    <span className="text-red-700 mt-1 text-xs">
                      {formik.errors.startDate}
                    </span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="valueOfPlots"
                    className="block text-sm font-medium text-gray-700">
                    Valor do tratamento
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="address-level2"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched && formik.errors.price && (
                    <span className="text-red-700 mt-1 text-xs">
                      {formik.errors.price}
                    </span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium text-gray-700">
                    Metodo de pagamento
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formik.values.paymentMethod}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="">Escolha a forma de pagamento</option>
                    <option value="Á vista">À vista</option>
                    <option value="Parcelado">Parcelado</option>
                  </select>
                  {formik.touched && formik.errors.paymentMethod && (
                    <span className="text-red-700 mt-1 text-xs">
                      {formik.errors.paymentMethod}
                    </span>
                  )}
                </div>
                {formik.values.paymentMethod === 'Parcelado' && (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="installmentAmount"
                      className="block text-sm font-medium text-gray-700">
                      Numero de parcelas
                    </label>
                    <select
                      id="installmentAmount"
                      name="installmentAmount"
                      value={formik.values.installmentAmount}
                      onChange={formik.handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Escolha quantas parcelas</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                    {formik.touched && formik.errors.installmentAmount && (
                      <span className="text-red-700 mt-1 text-xs">
                        {formik.errors.installmentAmount}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-fuchsia-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDentalTreatment;
