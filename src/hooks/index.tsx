import React from 'react';

import { AuthProvider } from './auth';
import { PopUpProvider } from './popUp';

interface ProvidersProps {
  children: JSX.Element[] | JSX.Element;
}

function index({ children }: ProvidersProps): JSX.Element {
  return (
    <AuthProvider>
      <PopUpProvider>{children}</PopUpProvider>
    </AuthProvider>
  );
}

export default index;
