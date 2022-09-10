import FormSignIn from '../components/FormSignIn';
import { CgProfile } from 'react-icons/cg';
function SignIn() {
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <CgProfile className='text-fuchsia-500  mx-auto h-24 w-auto' />
          <h2 className='mt-6 text-center text-3xl tracking-tight font-bold text-gray-900'>
            Faça login em sua conta
          </h2>
        </div>
        <FormSignIn />
      </div>
    </div>
  );
}

export default SignIn;
