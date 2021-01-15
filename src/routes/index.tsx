import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={SignUp} />
    <Route path="/login" component={SignIn} />
  </Switch>
);

export default Routes;
