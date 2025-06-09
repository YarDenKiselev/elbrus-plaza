import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

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
        <TextField source="ID_Client" label="ID клиента" />
        <TextField source="Name_client" label="ФИО" />
        <EmailField source="Email_client" label="Email" />
        <TextField source="Phone_client" label="Телефон" />
        <NumberField 
            source="Points_balance" 
            label="Баллы"
            sx={{ fontWeight: 'bold' }}
        />
    </Datagrid>
);

export const ClientsList = () => (
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
                    <PeopleIcon sx={{ fontSize: 40, mr: 2, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight={600} fontFamily="Montserrat, Arial, sans-serif" color="text.primary">
                        Список клиентов
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3, bgcolor: 'rgba(0, 0, 0, 0.1)' }} />
                <StyledDatagrid />
            </CardContent>
        </Card>
    </List>
);