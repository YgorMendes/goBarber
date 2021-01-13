import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border-radius: 10px;
  padding: 16px;
  background-color: #232129;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  ${(props) =>
    props.className &&
    css`
      border-color: #ff5858;

      svg {
        fill: #ff5858;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;

      svg {
        fill: #ff9000;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        fill: #ff9000;
      }
    `}

  svg {
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;
  }
`;
