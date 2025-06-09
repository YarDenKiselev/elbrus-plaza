import { Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin';

export const EventsEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="ID_Events" label="ID события" disabled />
            <NumberInput source="ID_Hotel" label="ID отеля" />
            <TextInput source="Name_events" label="Название события" fullWidth />
            <TextInput source="Description_events" label="Описание" multiline fullWidth />
            <DateInput source="Start_date_events" label="Дата начала" />
            <DateInput source="End_date_events" label="Дата окончания" />
            <TextInput source="Location_event" label="Локация" />
            <NumberInput source="Price_events" label="Цена" />
            <NumberInput source="Number_of_available_seats" label="Свободных мест" />
            <TextInput source="Status_events" label="Статус" />
        </SimpleForm>
    </Edit>
); 