import styled from 'styled-components';
import { shade } from 'polished';

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

    a > {
      text-decoration: none;
    }
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

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
  }

  div {
    flex: 1;
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
    padding: 16px 24px;
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

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
