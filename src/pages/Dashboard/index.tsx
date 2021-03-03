import { format, isToday } from 'date-fns';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiClock, FiPower } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { ptBR } from 'date-fns/esm/locale';
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
import 'react-day-picker/lib/style.css';
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appoitment {
  id: string;
  date: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

function Home(): JSX.Element {
  const { signOut, user } = useAuth();
  const history = useHistory();
  const [selectDate, setSelectDate] = React.useState(new Date());
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [monthAvailability, setMonthAvailability] = React.useState<
    MonthAvailabilityItem[]
  >([]);
  const [appointments, setAppointments] = React.useState<Appoitment[]>([]);

  const handleClick = React.useCallback(() => {
    signOut();
    history.push('/login');
  }, [signOut, history]);

  const handleDateChange = React.useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available) {
        setSelectDate(day);
      }
    },
    [],
  );

  const handleMonthChange = React.useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  React.useEffect(() => {
    api
      .get(`providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  React.useEffect(() => {
    api
      .get('/appointments/me', {
        params: {
          year: selectDate.getFullYear(),
          month: selectDate.getMonth() + 1,
          day: selectDate.getDate(),
        },
      })
      .then((response) => {
        setAppointments(response.data);
        console.log(response.data);
      });
  }, [selectDate]);

  const disableDays = React.useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });
    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = React.useMemo(() => {
    return format(selectDate, "'day' dd 'the' MMM", {
      locale: ptBR,
    });
  }, [selectDate]);

  const selectedWeeDay = React.useMemo(() => {
    return format(selectDate, 'cccc', {
      locale: ptBR,
    });
  }, [selectDate]);

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

        <button type="button" onClick={() => handleClick()}>
          <FiPower />
        </button>
      </Header>

      <Content>
        <Schedule>
          <h1>appointments hours</h1>
          <p>
            <span>{isToday(selectDate) && 'today | '}</span>
            <span>{selectedDateAsText} | </span>
            <span>{selectedWeeDay}</span>
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

        <Calendar>
          <DayPicker
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6], ...disableDays }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={handleDateChange}
            selectedDays={selectDate}
            onMonthChange={handleMonthChange}
          />
        </Calendar>
      </Content>
    </Container>
  );
}

export default Home;
