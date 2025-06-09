import { Edit, SimpleForm, TextInput, DateInput, NumberInput, useNotify, useRedirect } from 'react-admin';

const parseDateToISO = (date: string | Date) => date ? new Date(date).toISOString() : '';
const formatDateToLocal = (date: string | Date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('ru-RU');
};

export const BookingsEdit = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onError = (error: Error) => {
    let message = error.message;
    if (message.includes('not found') || message.includes('Не найден')) {
      message = 'Запись не найдена. Проверьте правильность данных.';
    } else if (message.includes('client') || message.includes('клиент')) {
      message = 'Клиент не найден. Проверьте данные клиента.';
    } else {
      message = 'Произошла ошибка. Попробуйте еще раз или обратитесь к администратору.';
    }
    notify(message, { type: 'error' });
    redirect('list');
  };

  return (
    <Edit mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput source="ID_Booking" label="ID бронирования" disabled />
        <TextInput source="ID_Client" label="ID клиента" />
        <TextInput source="ID_Room" label="ID комнаты" />
        <TextInput source="Room_Type" label="Тип номера" />
        <DateInput source="In_date_booking" label="Дата заезда" parse={parseDateToISO} format={formatDateToLocal} />
        <DateInput source="Out_date_booking" label="Дата выезда" parse={parseDateToISO} format={formatDateToLocal} />
        <NumberInput source="Price_of_booking" label="Стоимость" />
        <TextInput source="Created_At" label="Создано" disabled />
      </SimpleForm>
    </Edit>
  );
};