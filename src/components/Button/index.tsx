import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonComponent({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  );
}

export default ButtonComponent;
