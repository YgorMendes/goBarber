import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePopUp } from '../../hooks/popUp';
import api from '../../services/api';

import schema from './schema';

import Logo from '../../assets/icons/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import GlobalStyle from '../../styles/global';

interface UserData {
  name: string;
  email: string;
  password: string;
}

function SignUp(): JSX.Element {
  const { register, errors, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(schema),
  });
  const { addPopUp } = usePopUp();
  const history = useHistory();

  const onSubmit = async (values: UserData) => {
    try {
      await api.post('/users', values);
      addPopUp({ icon: 'Succes', title: 'Sucess', description: 'registered' });
      history.push('/login');
    } catch (err) {
      addPopUp({
        icon: 'Error',
        title: 'Error',
        description: 'not registered',
      });
    }
  };

  return (
    <>
      <Container>
        <Background />

        <Content>
          <img src={Logo} alt="logo" />
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <h1>sign up</h1>
            <Input
              className={errors.name ? 'borderError' : ''}
              icon="User"
              name="name"
              type="text"
              placeholder="name"
              register={register}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <Input
              className={errors.email ? 'borderError' : ''}
              icon="Email"
              name="email"
              type="text"
              placeholder="email"
              register={register}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <Input
              className={errors.password ? 'borderError' : ''}
              register={register}
              icon="Password"
              name="password"
              type="password"
              placeholder="password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Button type="submit">register</Button>
          </form>
          <Link to="login">
            <FiArrowLeft />
            retun to login
          </Link>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default SignUp;
