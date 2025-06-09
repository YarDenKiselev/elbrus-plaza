import { List, Datagrid, TextField, NumberField, BooleanField, SelectField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';

const roomTypes = [
    { id: 'двухместный стандарт', name: 'двухместный стандарт' },
    { id: 'улучшенный двухместный', name: 'улучшенный двухместный' },
    { id: 'двухместный делюкс', name: 'двухместный делюкс' },
    { id: 'дом с тремя спальнями', name: 'дом с тремя спальнями' },
    { id: 'люкс', name: 'люкс' },
    { id: 'президентский люкс', name: 'президентский люкс' },
    { id: 'семейный номер', name: 'семейный номер' },
    { id: 'трехместный номер Комфорт', name: 'трехместный номер Комфорт' },
    { id: 'четырехместный номер комфорт', name: 'четырехместный номер комфорт' },
];

const viewTypes = [
    { id: 'горы', name: 'горы' },
    { id: 'город', name: 'город' },
    { id: 'сад', name: 'сад' },
    { id: 'панорамный вид на горы', name: 'панорамный вид на горы' },
];

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
        <TextField source="ID_Room" label="ID номера" />
        <NumberField source="ID_Hotel" label="ID отеля" />
        <NumberField source="Number_room" label="Номер комнаты" />
        <SelectField 
            source="Type_room" 
            choices={roomTypes} 
            label="Тип номера"
        />
        <NumberField source="Number_of_beds" label="Количество кроватей" />
        <BooleanField 
            source="Room_Availability" 
            label="Доступность"
            sx={{
                '& .RaBooleanField-false': { color: '#f44336' },
                '& .RaBooleanField-true': { color: '#4caf50' }
            }}
        />
        <NumberField 
            source="Room_rate_per_night" 
            label="Цена за ночь" 
            options={{ style: 'currency', currency: 'RUB' }}
        />
        <SelectField 
            source="View_from_the_windows" 
            choices={viewTypes} 
            label="Вид из окна"
        />
        <BooleanField 
            source="Accessibility_for_people_with_disabilities" 
            label="Доступ для инвалидов"
            sx={{
                '& .RaBooleanField-false': { color: '#f44336' },
                '& .RaBooleanField-true': { color: '#4caf50' }
            }}
        />
        <BooleanField 
            source="Extra_sleeping_place" 
            label="Доп. место для сна"
            sx={{
                '& .RaBooleanField-false': { color: '#f44336' },
                '& .RaBooleanField-true': { color: '#4caf50' }
            }}
        />
    </Datagrid>
);

export const RoomsList = () => (
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
                    <HotelIcon sx={{ fontSize: 40, mr: 2, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={600} fontFamily="Montserrat, Arial, sans-serif" color="text.primary">
                        Список номеров
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: 'rgba(0, 0, 0, 0.1)' }} />
                <StyledDatagrid />
            </CardContent>
        </Card>
    </List>
);