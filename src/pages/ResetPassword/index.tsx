import React from 'react';
import { Link, useHistory, useLocation as UseLocation } from 'react-router-dom';

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
  password: string;
  password_confirmation: string;
}

function ResetPassword(): JSX.Element {
  const history = useHistory();
  const { addPopUp } = usePopUp();
  const location = UseLocation();

  const { handleSubmit, register, errors } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback(
    async (values: UserData) => {
      try {
        const token = location.search.replace('?tken=', '');

        if (!token) {
          throw new Error();
        }

        api.post('/password/reset', {
          password: values.password,
          password_confirmation: values.password_confirmation,
          token,
        });

        addPopUp({ icon: 'Succes', title: 'Succes', description: 'Has Login' });
        history.push('/login');
      } catch (err) {
        console.log(err);
        addPopUp({
          icon: 'Error',
          title: `Error`,
          description: 'not logged in',
        });
      }
    },
    [addPopUp],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>reset password</h1>
            <Input
              className={errors.password ? 'borderError' : ''}
              icon="Password"
              name="password"
              type="password"
              placeholder="password"
              register={register}
            />
            <Input
              className={errors.password ? 'borderError' : ''}
              icon="Password"
              name="password"
              type="password"
              placeholder="password confirmation"
              register={register}
            />
            <Button type="submit">change password</Button>
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

export default ResetPassword;
