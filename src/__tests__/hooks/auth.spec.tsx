import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-dom/test-utils';
import { useAuth, AuthProvider } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('Shoud be able to sign in', async () => {
    apiMock.onPost('sessions').reply(200, {
      user: {
        id: 'user123',
        name: 'lala',
        email: 'lala@lala.lala',
      },
      toke: 'token123',
    });

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const setItens = jest.spyOn(Storage.prototype, 'setItem');

    result.current.signIn({
      email: 'lala@lala.lala',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItens).toHaveBeenCalledTimes(2);
    expect(result.current.user.email).toEqual('lala@lala.lala');
  });

  it('Shoud restore saved data from storage when auth inits', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@goBarber:token':
          return 'token123';
        case '@goBarber:user':
          return JSON.stringify({
            id: 'user123',
            name: 'lala',
            email: 'lala@lala.lala',
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.email).toEqual('lala@lala.lala');
  });

  it('Shoud be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@goBarber:token':
          return 'token123';
        case '@goBarber:user':
          return JSON.stringify({
            id: 'user123',
            name: 'lala',
            email: 'lala@lala.lala',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });

  it('should be able to update user data', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    const user = {
      id: 'user123',
      name: 'lala',
      email: 'lala@lala.lala',
      avatar_url: 'img',
    };

    act(() => {
      result.current.updateUser(user);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@goBarber:user',
      JSON.stringify(user),
    );

    expect(result.current.user).toEqual(user);
  });
});
