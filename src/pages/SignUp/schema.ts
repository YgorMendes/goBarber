import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('name is required'),
  password: Yup.string()
    .min(6, 'enter a password of at least 6 characters')
    .required(),
  email: Yup.string()
    .required('email is required')
    .email('enter a valid email address'),
});
