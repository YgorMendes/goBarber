import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} isPrivate />
    <Route path="/register" component={SignUp} />
    <Route path="/login" component={SignIn} />
    <Route path="/forgot" component={ForgotPassword} />
  </Switch>
);

export default Routes;
