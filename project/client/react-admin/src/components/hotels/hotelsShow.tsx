import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Grid } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export const HotelShow = () => (
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
                    <HomeWorkIcon sx={{ fontSize: 56, mr: 3, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color="#fff">
                        Информация об отеле
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: '#444' }} />
        <SimpleShowLayout>
                    <Grid container spacing={4} columns={12}>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="ID_Hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Название</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Name_hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Адрес</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Adress_hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Телефон</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Phone_hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Рейтинг</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="Rating_hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Описание</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Description_hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Email</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Email_hotel" />
                            </Typography>
                        </Grid>
                    </Grid>
        </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);