import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/login' />
      <Route exact path='/login'>
        <SignIn />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
