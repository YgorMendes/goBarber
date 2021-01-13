import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

import Icon from '../Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  register?: (e: HTMLInputElement | null) => void;
}

function InputComponent({
  icon,
  name,
  className,
  register,
  ...rest
}: InputProps): JSX.Element {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsfocused] = React.useState(false);
  const [isFilled, setIsFilled] = React.useState(false);

  const handleInputFocus = React.useCallback(() => {
    setIsfocused(true);
  }, []);

  const handleInputBlur = React.useCallback(() => {
    setIsfocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused} className={className}>
      {icon && <Icon iconName={icon} />}

      <input
        {...rest}
        ref={(e) => {
          if (register) {
            register(e);
          }
          inputRef.current = e;
        }}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}

export default InputComponent;
