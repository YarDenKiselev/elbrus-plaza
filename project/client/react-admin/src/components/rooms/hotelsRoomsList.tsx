import * as React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    NumberField, 
    BooleanField, 
    Filter, 
    SelectInput, 
    ReferenceInput,
    FilterProps,
    ListProps,
    useListContext
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';

const RoomsFilter = (props: Omit<FilterProps, 'children'>) => (
    <Filter {...props}>
        <ReferenceInput 
            source="ID_Hotel" 
            reference="hotel" 
            label="ID отеля"
            alwaysOn
            allowEmpty
        />
        <SelectInput
            source="Room_Availability"
            label="Статус номеров"
            choices={[
                { id: 'all', name: 'Все номера'},
                { id: 'true', name: 'Только свободные' },
                { id: 'false', name: 'Только недоступные' },
            ]}
            alwaysOn
        />
    </Filter>
);

const EmptyState = () => {
    const { filterValues } = useListContext();
    if (!filterValues.ID_Hotel) {
        return (
            <Box sx={{ padding: 3, textAlign: 'center', color: '#888' }}>
                <Typography variant="h6">Выберите отель, чтобы увидеть информацию</Typography>
            </Box>
        );
    }
    return (
        <Box sx={{ padding: 3, textAlign: 'center', color: '#888' }}>
            <Typography variant="h6">Нет номеров в этом отеле по выбранному фильтру</Typography>
        </Box>
    );
};

const StyledDatagrid = () => (
    <Datagrid
        rowClick={(id, basePath, record) => `/rooms/${id}/show`}
        empty={<EmptyState />}
        sx={{
            '& .RaDatagrid-headerCell': {
                backgroundColor: 'rgba(35, 39, 47, 0.8)',
                color: '#fff',
                fontWeight: 'bold',
            },
            '& .RaDatagrid-rowCell': {
                backgroundColor: 'rgba(35, 39, 47, 0.8)',
                color: '#fff',
                '&:hover': {
                    backgroundColor: 'rgba(144, 202, 249, 0.2)',
                },
            },
            '& .RaDatagrid-rowOdd': {
                backgroundColor: 'rgba(35, 39, 47, 0.8)',
            },
        }}
    >
        <NumberField source="Number_room" label="Номер" />
        <TextField source="Type_room" label="Тип номера" />
        <NumberField source="Number_of_beds" label="Кроватей" />
        <BooleanField 
            source="Room_Availability" 
            label="Доступен"
            sx={{
                '& .RaBooleanField-false': { color: '#f44336' },
                '& .RaBooleanField-true': { color: '#4caf50' }
            }}
        />
        <NumberField 
            source="Room_rate_per_night" 
            label="Цена за ночь" 
            options={{ style: 'currency', currency: 'RUB' }}
            sx={{ fontWeight: 'bold' }}
        />
        <TextField source="View_from_the_windows" label="Вид из окна" />
    </Datagrid>
);

const HotelRoomsList: React.FC<ListProps> = (props) => {
    return (
        <List
            {...props}
            title="Номера отеля"
            filters={<RoomsFilter />}
            perPage={25}
            sort={{ field: 'Number_room', order: 'ASC' }}
            filterDefaultValues={{ ID_Hotel: undefined, Room_Availability: 'all' }}
        >
            <Card sx={{
                maxWidth: '95%',
                margin: '20px auto',
                borderRadius: 4,
                boxShadow: 3,
                background: 'rgba(35, 39, 47, 0.05)',
            }}>
                <CardContent>
                    <Box display="flex" alignItems="center" mb={3}>
                        <BedIcon sx={{ fontSize: 40, mr: 2, color: '#90caf9' }} />
                        <Typography variant="h4" fontWeight={600} fontFamily="Montserrat, Arial, sans-serif" color="text.primary">
                            Номера отеля
                        </Typography>
                    </Box>
                    <Divider sx={{ mb: 3, bgcolor: 'rgba(0, 0, 0, 0.1)' }} />
                    <StyledDatagrid />
                </CardContent>
            </Card>
        </List>
    );
};

export default HotelRoomsList;