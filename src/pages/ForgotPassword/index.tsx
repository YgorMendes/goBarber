import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { usePopUp } from '../../hooks/popUp';

import Logo from '../../assets/icons/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import GlobalStyle from '../../styles/global';
import api from '../../services/api';

interface UserData {
  email: string;
}

function ForgotPassword(): JSX.Element {
  const [loading, setLoading] = React.useState<boolean | null>(null);
  const history = useHistory();
  const { addPopUp } = usePopUp();

  const { handleSubmit, register, errors } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback(
    async (values: UserData) => {
      try {
        setLoading(true);
        await api.post('/password/forgot', {
          email: values.email,
        });

        addPopUp({
          icon: 'Succes',
          title: 'Succes',
          description: 'Password change done',
        });

        history.push('/login');
      } catch (err) {
        console.log(err);
        addPopUp({
          icon: 'Error',
          title: `Error`,
          description: 'Error in forgot password',
        });
      } finally {
        setLoading(false);
      }
    },
    [history, addPopUp],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>recover password</h1>
            <Input
              className={errors.email ? 'borderError' : ''}
              icon="Email"
              name="email"
              type="text"
              placeholder="email"
              register={register}
            />
            <Button type="submit">{loading ? 'loading...' : 'forgot'}</Button>
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

export default ForgotPassword;
