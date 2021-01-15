import React from 'react';
import {
  RouteProps as ReactRouterProps,
  Route as ReactDOMROute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps): JSX.Element {
  const { user } = useAuth();

  return (
    <ReactDOMROute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Route;
