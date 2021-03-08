import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

jest.mock('../../hooks/popUp', () => {
  return {
    usePopUp: () => ({
      addPopUp: mockedAddToast,
    }),
  };
});

describe('SignIn page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('Shoud be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('email');
    const passwordlField = getByPlaceholderText('password');
    const buttonElement = getByText('login');

    fireEvent.change(emailField, { target: { value: 'biels@sad.com' } });
    fireEvent.change(passwordlField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('Shoud not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('email');
    const passwordlField = getByPlaceholderText('password');
    const buttonElement = getByText('login');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordlField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          icon: 'Error',
          title: `Error`,
          description: 'not logged in',
        }),
      );
    });
  });

  it('Shoud display an error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('email');
    const passwordlField = getByPlaceholderText('password');
    const buttonElement = getByText('login');

    fireEvent.change(emailField, { target: { value: 'biel@gsad.com' } });
    fireEvent.change(passwordlField, { target: { value: '132456' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          icon: 'Error',
          title: `Error`,
          description: 'not logged in',
        }),
      );
    });
  });
});
