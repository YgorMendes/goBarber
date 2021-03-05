import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    img {
      margin-right: -48px;
      margin-top: -60px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    & > label {
      cursor: pointer;
      position: relative;
      width: 48px;
      height: 48px;
      background-color: #ff9000;
      border-radius: 50%;
      right: -10px;
      bottom: 0;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        display: none;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  header {
    width: 100%;
    background-color: #28262e;
    padding: 40px 12%;

    svg {
      width: 20px;
      height: 20px;
      color: #928e8b;
    }
  }
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
    /* margin: 40px 0; */

    div:nth-child(3) {
      margin-bottom: 18px;
    }

    h1 {
      margin-right: auto;
      margin-bottom: 24px;
    }
  }
`;
