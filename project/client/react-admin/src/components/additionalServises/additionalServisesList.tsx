import { List, Datagrid, TextField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
        <NumberField source="ID_Additional" label="ID" />
        <TextField source="Name_Additional" label="Название услуги" />
        <NumberField 
            source="Price_Additional" 
            label="Цена (₽)"
            options={{ style: 'currency', currency: 'RUB' }}
        />
    </Datagrid>
);

export const AdditionalServisesList = () => (
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
                    <LocalOfferIcon sx={{ fontSize: 40, mr: 2, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={600} fontFamily="Montserrat, Arial, sans-serif" color="text.primary">
                        Дополнительные услуги
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: 'rgba(0, 0, 0, 0.1)' }} />
                <StyledDatagrid />
            </CardContent>
        </Card>
    </List>
);

export default AdditionalServisesList;