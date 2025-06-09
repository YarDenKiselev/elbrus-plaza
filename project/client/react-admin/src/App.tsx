import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { HotelCreate } from './components/hotels/hotelsCreate';
import { HotelEdit } from './components/hotels/hotelsEdit';
import { HotelList } from './components/hotels/hotelsList';
import { HotelShow } from './components/hotels/hotelsShow';
import { ClientsEdit } from './components/clients/clientsEdit';
import { ClientsCreate } from './components/clients/clientsCreate';
import { ClientsShow } from './components/clients/clientsShow';
import { ClientsList } from './components/clients/clientsList';
import { RoomsList } from './components/rooms/RoomsList';
import { RoomsCreate } from './components/rooms/RoomsCreate';
import { RoomsEdit } from './components/rooms/RoomsEdit';
import { RoomsShow } from './components/rooms/RoomsShow';
import HotelRoomsList from "./components/rooms/hotelsRoomsList";
import { EventsList } from './components/events/eventsList';
import { EventsCreate } from './components/events/eventsCreate';
import { EventsEdit } from './components/events/eventsEdit';
import { EventsShow } from './components/events/eventsShow';
import { AdditionalServisesList } from './components/additionalServises/additionalServisesList';
import { AdditionalServisesCreate } from './components/additionalServises/additionalServisesCreate';
import { AdditionalServisesEdit } from './components/additionalServises/additionalServisesEdit';
import { AdditionalServisesShow } from './components/additionalServises/additionalServisesShow';
import { BookingsList } from './components/bookings/bookingsList';
import { BookingsCreate } from './components/bookings/bookingsCreate';
import { BookingsEdit } from './components/bookings/bookingsEdit';
import { BookingsShow } from './components/bookings/bookingsShow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomLayout from './CustomLayout';
import { 
  CssBaseline, 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Divider 
} from '@mui/material';
import { 
  HomeWork as HotelIcon, 
  Bed, 
  Event as EventIcon, 
  LocalOffer, 
  Assignment, 
  Dashboard as DashboardIcon,
  People as ClientIcon
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff9800' },
    background: { default: '#f4f6fa' },
  },
  shape: { borderRadius: 20 },
  typography: {
    fontFamily: 'Montserrat, Arial, Roboto, sans-serif',
    h6: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontSize: '1.1rem',
          padding: '10px 28px',
          textTransform: 'none',
          boxShadow: '0 2px 12px 0 rgba(33, 150, 243, 0.08)',
          transition: '0.3s',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 24px 0 rgba(33, 150, 243, 0.10)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

const Dashboard = () => (
  <Card sx={{
    maxWidth: 1400,
    margin: '40px auto',
    borderRadius: 6,
    boxShadow: 6,
    background: 'rgba(35, 39, 47, 0.98)',
    color: '#fff'
  }}>
    <CardContent>
      <Box display="flex" alignItems="center" mb={3}>
        <DashboardIcon sx={{ fontSize: 56, mr: 3, color: '#90caf9' }} />
        <Typography variant="h4" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color="#fff">
          Информационная панель
        </Typography>
      </Box>
      <Divider sx={{ mb: 3, bgcolor: '#444' }} />
      
      <Box>
        <Typography variant="h6" fontWeight={600} color="#fff" mb={2}>
          Управляйте отелем, событиями, бронированиями и услугами в одном месте.
        </Typography>
        <Typography variant="body1" color="#ccc">
          Выберите раздел в меню слева для начала работы.
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)', p: 0 }}>
      <Admin dataProvider={dataProvider} layout={CustomLayout} dashboard={Dashboard}>
        <Resource
          name="hotel"
          list={HotelList}
          edit={HotelEdit}
          create={HotelCreate}
          show={HotelShow}
          icon={HotelIcon}
          options={{ label: 'Отели' }}
        />
        <Resource
          name="client"
          list={ClientsList}
          edit={ClientsEdit}
          create={ClientsCreate}
          show={ClientsShow}
          icon={ClientIcon}
          options={{ label: 'Клиенты' }}
        />
        <Resource
          name="rooms"
          list={RoomsList}
          edit={RoomsEdit}
          create={RoomsCreate}
          show={RoomsShow}
          icon={Bed}
          options={{ label: 'Номера' }}
        />
        <Resource
          name="hotel-rooms"
          list={HotelRoomsList}
          show={RoomsShow}
          icon={Bed}
          options={{ label: 'Номера отелей' }}
        />
        <Resource
          name="events"
          list={EventsList}
          edit={EventsEdit}
          create={EventsCreate}
          show={EventsShow}
          icon={EventIcon}
          options={{ label: 'События' }}
        />
        <Resource
          name="additional-services"
          list={AdditionalServisesList}
          edit={AdditionalServisesEdit}
          create={AdditionalServisesCreate}
          show={AdditionalServisesShow}
          icon={LocalOffer}
          options={{ label: 'Доп. услуги' }}
        />
        <Resource
          name="bookings"
          list={BookingsList}
          edit={BookingsEdit}
          create={BookingsCreate}
          show={BookingsShow}
          icon={Assignment}
          options={{ label: 'Бронирования' }}
        />
      </Admin>
    </Box>
  </ThemeProvider>
);

export default App;