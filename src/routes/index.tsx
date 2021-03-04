import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/register" component={SignUp} />
    <Route path="/login" component={SignIn} />
    <Route path="/forgot" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/" exact component={Dashboard} isPrivate />
    <Route path="/Profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
