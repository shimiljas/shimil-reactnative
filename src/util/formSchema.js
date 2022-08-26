import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  name: Yup.string().label('name').required('Please enter name'),
  price: Yup.number().label('price').required('Please enter price'),
  category: Yup.string().label('category').required('Please select category'),
  description: Yup.string()
    .label('description')
    .required('Please enter description'),
  avatar: Yup.string().label('avatar').required('Please enter avatar'),
  developerEmail: Yup.string()
    .label('DeveloperEmail')
    .required('Please enter developer email'),
});
