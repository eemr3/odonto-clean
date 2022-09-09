import NavBar from '../components/NavBar';
import { getPayload } from '../contexts/utils';
import Cookies from 'js-cookie';
import SearchPatient from '../components/SearchPatient';

function Home() {
  const token = Cookies.get('ut');
  getPayload(token as string);

  return (
    <div>
      <NavBar />
      <SearchPatient />
    </div>
  );
}

export default Home;
