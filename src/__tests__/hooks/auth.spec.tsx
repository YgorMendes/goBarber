import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('Shoud be able to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'lala@lala.lala',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('lala@lala.lala');
  });
});
