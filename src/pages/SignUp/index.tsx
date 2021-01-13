import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

  const onSubmit = (values: UserData) => {
    console.log('values', values);
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
            <a href="login">return to login</a>
          </form>
          <a href="login">
            <FiArrowLeft />
            retun to login
          </a>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default SignUp;
