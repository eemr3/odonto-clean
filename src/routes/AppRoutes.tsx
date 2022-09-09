import { Switch, Route, Redirect } from 'react-router-dom';
import DentalTreatment from '../pages/DentalTreatment';
import Home from '../pages/Home';
import MyIncome from '../pages/MyIncome';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import { ProtecteRoute } from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <SignIn />
      </Route>
      <ProtecteRoute>
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
      </ProtecteRoute>
    </Switch>
  );
};

export default AppRoutes;
