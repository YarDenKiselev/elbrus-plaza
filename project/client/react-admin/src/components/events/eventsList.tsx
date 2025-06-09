import { List, Datagrid, TextField, DateField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const StyledDatagrid = () => (
    <Datagrid
        rowClick="show"
        sx={{
            '& .RaDatagrid-table': {
                borderCollapse: 'separate',
                borderSpacing: '0 8px',
            },
            '& .RaDatagrid-thead': {
                position: 'relative',
                zIndex: 1,
            },
            '& .RaDatagrid-headerCell': {
                backgroundColor: 'rgba(35, 39, 47, 0.8)',
                color: '#fff',
                fontWeight: 'bold',
                borderBottom: 'none',
            },
            '& .RaDatagrid-row': {
                backgroundColor: 'rgba(35, 39, 47, 0.8)',
                borderRadius: '4px',
                '&:hover': {
                    backgroundColor: 'rgba(144, 202, 249, 0.2)',
                },
            },
            '& .RaDatagrid-rowCell': {
                borderBottom: 'none',
                color: '#fff',
                padding: '16px',
            },
            '& .RaDatagrid-headerRow': {
                borderBottomColor: 'rgba(81, 81, 81, 1)',
            },
        }}
    >
        <NumberField source="ID_Events" label="ID события" />
        <NumberField source="ID_Hotel" label="ID отеля" />
        <TextField source="Name_events" label="Название" />
        <TextField source="Description_events" label="Описание" />
        <DateField 
            source="Start_date_events" 
            label="Начало" 
            locales="ru-RU" 
            showTime
        />
        <DateField 
            source="End_date_events" 
            label="Окончание" 
            locales="ru-RU"
            showTime
        />
        <TextField source="Location_event" label="Место" />
        <NumberField 
            source="Price_events" 
            label="Цена" 
            options={{ style: 'currency', currency: 'RUB' }}
        />
        <NumberField 
            source="Number_of_available_seats" 
            label="Свободно мест"
        />
        <TextField 
            source="Status_events" 
            label="Статус"
        />
    </Datagrid>
);

export const EventsList = () => (
    <List>
        <Card sx={{
            maxWidth: '95%',
            margin: '20px auto',
            borderRadius: 4,
            boxShadow: 3,
            background: 'rgba(35, 39, 47, 0.05)',
        }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={3}>
                    <EventIcon sx={{ fontSize: 40, mr: 2, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={600} fontFamily="Montserrat, Arial, sans-serif" color="text.primary">
                        Мероприятия и события
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: 'rgba(0, 0, 0, 0.1)' }} />
                <StyledDatagrid />
            </CardContent>
        </Card>
    </List>
);