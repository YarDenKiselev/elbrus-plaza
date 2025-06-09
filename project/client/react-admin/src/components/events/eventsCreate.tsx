import { Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin';

const parseDateToISO = (date: string | Date) => date ? new Date(date).toISOString() : '';
const formatDateToLocal = (date: string | Date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('ru-RU');
};

export const EventsCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="ID_Hotel" label="ID отеля" />
            <TextInput source="Name_events" label="Название события" fullWidth />
            <TextInput source="Description_events" label="Описание" multiline fullWidth />
            <DateInput 
                source="Start_date_events" 
                label="Дата начала" 
                parse={parseDateToISO}
                format={formatDateToLocal}
            />
            <DateInput 
                source="End_date_events" 
                label="Дата окончания" 
                parse={parseDateToISO}
                format={formatDateToLocal}
            />
            <TextInput source="Location_event" label="Локация" />
            <NumberInput source="Price_events" label="Цена" />
            <NumberInput source="Number_of_available_seats" label="Свободных мест" />
            <TextInput source="Status_events" label="Статус" />
        </SimpleForm>
    </Create>
); 