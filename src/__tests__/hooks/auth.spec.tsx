import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
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
});
