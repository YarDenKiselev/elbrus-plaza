import { Show, SimpleShowLayout, TextField, EmailField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const ClientsShow = () => (
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
                    <PersonIcon sx={{ fontSize: 56, mr: 3, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color="#fff">
                        Информация о клиенте
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: '#444' }} />
        <SimpleShowLayout>
                    <Grid container spacing={4} columns={12}>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID клиента</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="ID_Client" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ID отеля</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="ID_Hotel" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>ФИО</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Name_client" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Email</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <EmailField source="Email_client" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Телефон</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <TextField source="Phone_client" />
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography variant="subtitle2" sx={{ color: '#90caf9', fontWeight: 700 }}>Бонусные баллы</Typography>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                                <NumberField source="Points_balance" />
                            </Typography>
                        </Grid>
                    </Grid>
        </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);