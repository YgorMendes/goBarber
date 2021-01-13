import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 16px 16px 0 0;
  right: 0;
  top: 0;
  overflow: hidden;
`;

export const PopUp = styled.div`
  display: flex;
  margin: 16px 16px 0 0;

  & + div {
    margin-top: 8px;
  }

  div,
  button {
    background-color: #2b2b2b;
    padding: 8px;
  }

  div:nth-child(1) {
    border-radius: 6px 0 0 6px;
    padding: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 20px;
    }
  }

  div:nth-child(2) {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 16px;
      }
    }
  }

  button {
    border: none;
    border-radius: 0 6px 6px 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;

    svg {
      width: 20px;
    }
  }
`;
