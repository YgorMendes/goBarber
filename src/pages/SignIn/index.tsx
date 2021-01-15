import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { useAuth } from '../../hooks/auth';
import { usePopUp } from '../../hooks/popUp';

import Logo from '../../assets/icons/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import GlobalStyle from '../../styles/global';

interface UserData {
  email: string;
  password: string;
}

function SignIn(): JSX.Element {
  const { signIn, isLogued } = useAuth();
  const { addPopUp } = usePopUp();

  const { handleSubmit, register, errors } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback(
    (values: UserData) => {
      console.log('values', values);

      console.log(values.email, values.password);

      try {
        signIn({ email: values.email, password: values.password });
        addPopUp({ icon: 'Succes', title: 'Has Login' });
      } catch (err) {
        if (err) {
          console.log(err);
        }
        addPopUp({ icon: 'Error', title: 'Login Error' });
      }
    },
    [signIn],
  );

  if (isLogued) {
    console.log(isLogued);
    return (
      <Switch>
        <Route
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    );
  }

  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>sign in</h1>
            <Input
              className={errors.email ? 'borderError' : ''}
              icon="Email"
              name="email"
              type="text"
              placeholder="email"
              register={register}
            />
            <Input
              className={errors.password ? 'borderError' : ''}
              icon="Password"
              name="password"
              type="text"
              placeholder="password"
              register={register}
            />
            <Button type="submit">login</Button>
            <a href="forgot">you have forgotten the password?</a>
          </form>
          <Link to="register">
            <FiLogIn />
            register
          </Link>
        </Content>

        <Background />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default SignIn;
