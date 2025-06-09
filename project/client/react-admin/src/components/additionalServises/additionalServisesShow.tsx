import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Grid } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export const AdditionalServisesShow = () => (
  <Show>
    <Card sx={{
      maxWidth: 900,
      margin: '40px auto',
      borderRadius: 6,
      boxShadow: 6,
      background: 'rgba(35, 39, 47, 0.98)',
      color: '#fff'
    }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={3}>
          <LocalOfferIcon sx={{ fontSize: 56, mr: 3, color: '#90caf9' }} />
          <Typography variant="h4" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color="#fff">
            Информация об услуге
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, bgcolor: '#444' }} />
        <SimpleShowLayout>
          <Grid container spacing={4} columns={12}>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <NumberField source="ID_Additional" />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Название услуги</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <TextField source="Name_Additional" />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Цена (₽)</Typography>
              <Typography variant="h6" fontWeight={600} color="#fff">
                <NumberField source="Price_Additional" />
              </Typography>
            </Grid>
          </Grid>
        </SimpleShowLayout>
      </CardContent>
    </Card>
  </Show>
);

export default AdditionalServisesShow; 