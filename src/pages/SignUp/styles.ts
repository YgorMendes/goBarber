import styled from 'styled-components';
import SignInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 40px 0;

    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      color: #f4ede8;
      margin-top: 16px;
      transition: color 0.2s;

      &:hover {
        color: #cdc2ba;
      }
    }
  }

  p {
    margin: 8px 0;
    color: #ff5858;
  }

  a {
    margin-top: 16px;
    text-decoration: none;
    color: #ff9000;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: #cb790e;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;
