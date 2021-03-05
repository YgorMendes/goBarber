import React, { ChangeEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePopUp } from '../../hooks/popUp';
import api from '../../services/api';

import schema from './schema';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';
import GlobalStyle from '../../styles/global';
import { useAuth } from '../../hooks/auth';

interface UserData {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirmation_password: string;
}

function Profile(): JSX.Element {
  const { user, updateUser } = useAuth();
  const { register, errors, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(schema),
  });
  const { addPopUp } = usePopUp();
  const history = useHistory();

  const onSubmit = async (data: UserData) => {
    try {
      const {
        name,
        email,
        old_password,
        password,
        confirmation_password,
      } = data;

      const formData = {
        name,
        email,
        ...(old_password
          ? {
              old_password,
              password,
              confirmation_password,
            }
          : {}),
      };
      const response = await api.put('/profile', formData);

      updateUser(response.data);

      addPopUp({ icon: 'Succes', title: 'Sucess', description: 'change ok' });
      history.push('/');
    } catch (err) {
      addPopUp({
        icon: 'Error',
        title: 'Error',
        description: 'not registered',
      });
    }
  };

  const handleAvatarChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);
        api.patch('users/avatar', data).then((response) => {
          updateUser(response.data);
        });
      }
    },
    [updateUser],
  );

  return (
    <>
      <Container>
        <header>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </header>
        <Content>
          <div>
            <img src={user.avatar_url} alt="barber man" />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <h1>sign up</h1>
            <Input
              className={errors.name ? 'borderError' : ''}
              defaultValue={user.name}
              icon="User"
              name="name"
              type="text"
              placeholder="name"
              register={register}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <Input
              className={errors.email ? 'borderError' : ''}
              defaultValue={user.email}
              icon="Email"
              name="email"
              type="text"
              placeholder="email"
              register={register}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <Input
              className={errors.old_password ? 'borderError' : ''}
              register={register}
              icon="Password"
              name="old_password"
              type="password"
              placeholder="old password"
            />
            {errors.old_password && <p>{errors.old_password.message}</p>}

            <Input
              className={errors.password ? 'borderError' : ''}
              register={register}
              icon="Password"
              name="password"
              type="password"
              placeholder="new password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Input
              className={errors.confirmation_password ? 'borderError' : ''}
              register={register}
              icon="Password"
              name="password"
              type="password"
              placeholder="new password confirmation"
            />
            {errors.confirmation_password && (
              <p>{errors.confirmation_password.message}</p>
            )}

            <Button type="submit">change confirmation</Button>
          </form>
          <Link to="login" />
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default Profile;
