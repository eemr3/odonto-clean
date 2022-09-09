import { useFormik } from 'formik';
import { requestNewPatientPost } from '../contexts/utils';
import { registerPatientSchema } from '../schemas/RegisterPatient.schema';
import { IPatientData } from '../contexts/types';

function FormRegisterPatient() {
  const createNewPatient = async (values: IPatientData) => {
    try {
      await requestNewPatientPost(values);
    } catch (error) {
      console.info(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      document: '',
    },
    validationSchema: registerPatientSchema,
    onSubmit: (values) => {
      createNewPatient(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="treatment"
                className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                autoComplete="street-address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {formik.touched && formik.errors.name && (
                <span className="text-red-700 mt-1 text-xs">{formik.errors.name}</span>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {formik.touched && formik.errors.email && (
                <span className="text-red-700 mt-1 text-xs">{formik.errors.email}</span>
              )}
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="valueOfPlots"
                className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {formik.touched && formik.errors.phone && (
                <span className="text-red-700 mt-1 text-xs">{formik.errors.phone}</span>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="document"
                className="block text-sm font-medium text-gray-700">
                CPF
              </label>
              <input
                id="document"
                name="document"
                value={formik.values.document}
                onChange={formik.handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {formik.touched && formik.errors.document && (
                <span className="text-red-700 mt-1 text-xs">
                  {formik.errors.document}
                </span>
              )}
            </div>
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
  );
}

export default FormRegisterPatient;
