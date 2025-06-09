import { 
    Create, 
    SimpleForm, 
    TextInput, 
    DateInput, 
    NumberInput, 
    useNotify, 
    useRedirect, 
    required 
} from 'react-admin';

const parseDateToISO = (date: string | Date) => date ? new Date(date).toISOString() : '';
const formatDateToLocal = (date: string | Date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('ru-RU');
};

// Валидатор для проверки дат
const validateDates = (values: Record<string, any>) => {
  const errors: Record<string, any> = {};
  
  if (values.in_date_booking && values.out_date_booking) {
    const inDate = new Date(values.in_date_booking);
    const outDate = new Date(values.out_date_booking);
    
    if (inDate > outDate) {
      errors.in_date_booking = 'Дата заезда не может быть позже даты выезда';
      errors.out_date_booking = 'Дата выезда не может быть раньше даты заезда';
    }
  }
  
  return errors;
};

export const BookingsCreate = () => {
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
    <Create mutationOptions={{ onError }}>
      <SimpleForm validate={validateDates}>
        <TextInput source="room_type" label="Тип номера" validate={required()} />
        <DateInput 
          source="in_date_booking" 
          label="Дата заезда" 
          parse={parseDateToISO} 
          format={formatDateToLocal}
          validate={required()}
        />
        <DateInput 
          source="out_date_booking" 
          label="Дата выезда" 
          parse={parseDateToISO} 
          format={formatDateToLocal}
          validate={required()}
        />
        <NumberInput source="price_of_booking" label="Стоимость" validate={required()} />
        <TextInput source="name_client" label="Имя клиента" validate={required()} />
        <TextInput source="email_client" label="Email клиента" validate={required()} />
        <TextInput source="phone_client" label="Телефон клиента" validate={required()} />
      </SimpleForm>
    </Create>
  );
};