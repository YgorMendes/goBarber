import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

function Home(): JSX.Element {
  const { isLogued } = useAuth();

  if (!isLogued) {
    return (
      <Switch>
        <Route
          render={() => {
            return <Redirect to="/login" />;
          }}
        />
      </Switch>
    );
  }

  return <h1>asd</h1>;
}

export default Home;
