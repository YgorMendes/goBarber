import React from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: any;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isLogued: boolean;
}

interface AuthContextProps {
  children: JSX.Element[] | JSX.Element;
}

interface AusthState {
  token: string;
  user: any;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps): JSX.Element {
  const [isLogued, setIsLogued] = React.useState(false);

  const [data, setData] = React.useState<AusthState>(() => {
    const token = localStorage.getItem('@goBarber:token');
    const user = localStorage.getItem('@goBarber:user');

    if (token && user) {
      setIsLogued(true);
      return { token, user: JSON.parse(user) };
    }
    setIsLogued(false);

    return {} as AusthState;
  });

  const signIn = React.useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log(response.data);
    console.log('signIn');

    const { token, user } = response.data;

    localStorage.setItem('@goBarber:token', token);
    localStorage.setItem('@goBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = React.useCallback(() => {
    localStorage.removeItem('@goBarber:token');
    localStorage.removeItem('@goBarber:user');
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, isLogued }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthmustbe used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
