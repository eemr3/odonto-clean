import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getPayload } from '../contexts/utils';
import Cookies from 'js-cookie';

function Home() {
  const token = Cookies.get('ut');
  getPayload(token as string);

  return <NavBar />;
}

export default Home;
