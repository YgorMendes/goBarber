import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #28262e;
`;

export const Header = styled.header`
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

  div {
    margin-left: 12px;
  }

  strong {
    color: #f8902c;
  }
`;
