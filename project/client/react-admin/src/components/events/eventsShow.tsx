import { Show, SimpleShowLayout, TextField, DateField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Grid } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export const EventsShow = () => (
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
                    <EventIcon sx={{ fontSize: 56, mr: 3, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color="#fff">
                        Информация о событии
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: '#444' }} />
        <SimpleShowLayout>
                    <Grid container spacing={4} columns={12}>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID события</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="ID_Events" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID отеля</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="ID_Hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Название события</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Name_events" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Описание</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Description_events" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Дата начала</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <DateField source="Start_date_events" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Дата окончания</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <DateField source="End_date_events" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Локация</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Location_event" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Цена</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="Price_events" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Свободных мест</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="Number_of_available_seats" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Статус</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Status_events" />
                            </Typography>
                        </Grid>
                    </Grid>
        </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
); 