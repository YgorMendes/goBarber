import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Header, Profile } from './styles';
import Logo from '../../assets/icons/logo.svg';

function Home(): JSX.Element {
  const { signOut, user } = useAuth();

  const handleClick = React.useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />

        <Profile>
          <img src={user.avatar_url} alt="description" />
          <div>
            <p>wellcome!</p>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={handleClick}>
          <FiPower />
        </button>
      </Header>
    </Container>
  );
}

export default Home;
