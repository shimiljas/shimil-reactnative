import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  Name: Yup.string().label('Name').required('Please enter name'),
  Price: Yup.number().label('Price').required('Please enter price'),
  Category: Yup.string().label('Category').required('Please select category'),
  Description: Yup.string()
    .label('Description')
    .required('Please enter description'),
  Avatar: Yup.string().label('Avatar').required('Please enter avatar'),
  DeveloperEmail: Yup.string()
    .label('DeveloperEmail')
    .required('Please enter developer email'),
});
