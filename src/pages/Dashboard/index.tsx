import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  Section,
  Appointment,
} from './styles';
import Logo from '../../assets/icons/logo.svg';

function Home(): JSX.Element {
  const { signOut, user } = useAuth();
  const [selectDate, setSelectDate] = React.useState(new Date());

  const handleClick = React.useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />

        <Profile>
          <img
            src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t31.0-8/18077219_284318775359631_700044029426251945_o.jpg?_nc_cat=109&ccb=3&_nc_sid=730e14&_nc_eui2=AeEh3t8UF5iWkKVgTsCjwh3FPlzeQ796hVg-XN5Dv3qFWET5SgM_5ah9YBBCuuAz3P4TCOs4yAcceGxH8vNapq5o&_nc_ohc=VHau98i7MpwAX_pSlFz&_nc_ht=scontent.fcgh5-1.fna&oh=6d00e7abfba43996d81f91a4e647eff6&oe=6065A71C"
            alt="description"
          />
          <div>
            <p>wellcome!</p>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={handleClick}>
          <FiPower />
        </button>
      </Header>

      <Content>
        <Schedule>
          <h1>appointments hours</h1>
          <p>
            <span>today | </span>
            <span>day 02 | </span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>appointment to follow</strong>
            <div>
              <img
                src="https://s3.envato.com/files/297753474/IMG_7074.jpg"
                alt="barber woman"
              />
              <strong>Barber woman</strong>
              <span>
                <FiClock />
                13:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>morning</strong>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src="https://s3.envato.com/files/297753474/IMG_7074.jpg"
                  alt="barber woman"
                />
                <strong>Barber woman</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src="https://s3.envato.com/files/297753474/IMG_7074.jpg"
                  alt="barber woman"
                />
                <strong>Barber woman</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>afternoon</strong>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src="https://s3.envato.com/files/297753474/IMG_7074.jpg"
                  alt="barber woman"
                />
                <strong>Barber woman</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
}

export default Home;
