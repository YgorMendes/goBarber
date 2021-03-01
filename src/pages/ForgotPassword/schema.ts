import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('email is required')
    .email('enter a valid email address'),
});
