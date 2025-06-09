import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const AdditionalServisesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="Name_Additional" label="Название услуги" required />
      <NumberInput source="Price_Additional" label="Цена (₽)" required min={0} />
    </SimpleForm>
  </Edit>
);

export default AdditionalServisesEdit; 