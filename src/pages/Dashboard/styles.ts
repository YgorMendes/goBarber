import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  background-color: #28262e;
  padding: 20px 12%;

  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    height: 80px;
  }

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
  }

  button {
    margin-left: auto;
    background-color: transparent;
    border: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    margin-left: 12px;
  }

  strong {
    color: #f8902c;
  }
`;

export const Content = styled.main`
  margin: 64px auto;
  display: flex;
  padding: 0 12%;
`;
export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 42px;
  }

  p {
    margin-top: 20px;
  }

  p > span {
    color: #f8902c;
  }
`;
export const Calendar = styled.aside`
  width: 380px;
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
  }

  div {
    width: 520px;
    background-color: #3e3b47;
    margin-top: 24px;
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 8px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    strong {
      margin-left: 20px;
      font-size: 28px;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: auto;

      svg {
        color: #f8902c;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.div`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;

    svg {
      color: #f8902c;
      margin-right: 8px;
    }
  }

  div {
    background-color: #3e3b47;
    display: flex;
    flex: 1;
    align-items: center;
    padding: 16px 24px;
    border-radius: 8px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: fff;
      font-size: 20px;
    }
  }
`;
