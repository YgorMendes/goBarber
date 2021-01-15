import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} isPrivate />
    <Route path="/register" component={SignUp} />
    <Route path="/login" component={SignIn} />
  </Switch>
);

export default Routes;
