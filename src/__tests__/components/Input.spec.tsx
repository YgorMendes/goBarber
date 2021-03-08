import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Input from '../../components/Input';

describe('Input component', () => {
  it('Shoud be able to render an input', async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="email" />,
    );

    expect(getByPlaceholderText('email')).toBeTruthy();
  });

  it('Shoud render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="email" />,
    );

    const inputElement = getByPlaceholderText('email');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #ff9000;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #ff9000;');
    });
  });
});
