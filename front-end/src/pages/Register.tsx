import FormRegisterPatient from '../components/FormRegisterPatient';
import NavBar from '../components/NavBar';

function Register() {
  return (
    <>
      <NavBar />
      <div className="container m-auto flex flex-col items-center text-xl lg:text-3xl">
        <h2 className="lg:mt-12 lg:mb-16 mt-5">Cadastro de paciente</h2>

        <div className="m-auto container md:mt-0">
          <FormRegisterPatient />
        </div>
      </div>
    </>
  );
}

export default Register;
