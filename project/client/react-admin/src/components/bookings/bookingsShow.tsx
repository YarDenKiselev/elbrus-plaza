import { Show, SimpleShowLayout, TextField, DateField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const BookingsShow = () => (
  <Show>
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
          <AssignmentIcon sx={{ fontSize: 56, mr: 3, color: '#90caf9' }} />
          <Typography variant="h4" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color="#fff">
            Детали бронирования
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, bgcolor: '#444' }} />
        <SimpleShowLayout>
          <Grid container spacing={4} columns={12}>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID бронирования</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <TextField source="ID_Booking" />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID клиента</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <TextField source="ID_Client" />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID комнаты</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <TextField source="ID_Room" />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Тип номера</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <TextField source="Room_Type" />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Дата заезда</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <DateField source="In_date_booking" locales="ru-RU" showTime />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Дата выезда</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <DateField source="Out_date_booking" locales="ru-RU" showTime />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Стоимость</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <NumberField source="Price_of_booking" options={{ style: 'currency', currency: 'RUB' }} />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Создано</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <DateField source="Created_At" locales="ru-RU" showTime />
              </Typography>
            </Grid>
          </Grid>
        </SimpleShowLayout>
      </CardContent>
    </Card>
  </Show>
);