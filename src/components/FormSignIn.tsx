import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { IoEyeSharp, IoEyeOff, IoLockClosedSharp } from 'react-icons/io5';
import { ToastContainer } from 'react-toastify';
import { loginSchemaValidation } from '../schemas/Login.schema';
import { AuthContext } from '../contexts/AuthContext';
import { SignInDataType } from '../contexts/types';

export default function App() {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (values: SignInDataType) => {
    signIn({ email: values.email, password: values.password });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchemaValidation,
    onSubmit: (values) => {
      handleSignIn(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <ToastContainer />
      <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
        <input type="hidden" name="remember" value="true" />

        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Endereço de Email
            </label>
            <input
              id="email-address"
              name="email"
              type="text"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Endereço de Email"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">{formik.errors.email}</span>
            )}
          </div>
          <div className="password_2 block pt-6 relative">
            <label htmlFor="password" className="sr-only">
              Digite sua Senha
            </label>
            <div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Digite sua Senha"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-500 text-sm">{formik.errors.password}</span>
              )}
            </div>
            <div className="text-2xl absolute top-8 right-2">
              {showPassword ? (
                <IoEyeOff
                  onClick={handleClickShowPassword}
                  className="h-6 font-extralight"
                />
              ) : (
                <IoEyeSharp
                  onClick={handleClickShowPassword}
                  className="h-6 font-extralight"
                />
              )}
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <IoLockClosedSharp />
            </span>
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
