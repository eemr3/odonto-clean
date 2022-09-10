import { Switch, Route } from 'react-router-dom';
import AppProvider from '../contexts/AppContext';
import DentalTreatment from '../pages/DentalTreatment';
import Home from '../pages/Home';
import MyIncome from '../pages/MyIncome';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import { ProtecteRoute } from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <ProtecteRoute>
        <AppProvider>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/my-income">
            <MyIncome />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dental-treatment/:id">
            <DentalTreatment />
          </Route>
        </AppProvider>
      </ProtecteRoute>
    </Switch>
  );
};

export default AppRoutes;
