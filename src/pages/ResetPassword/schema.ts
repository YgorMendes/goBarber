import * as Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string().required('password is required'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
