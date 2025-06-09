import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const AdditionalServisesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="Name_Additional" label="Название услуги" required />
      <NumberInput source="Price_Additional" label="Цена (₽)" required min={0} />
    </SimpleForm>
  </Create>
);

export default AdditionalServisesCreate; 