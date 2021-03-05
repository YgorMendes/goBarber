import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string()
    .required('email is required')
    .email('enter a valid email address'),
  old_password: Yup.string(),
  password: Yup.string().when('old_password', {
    is: (val: { lenght: any }) => !!val.lenght,
    then: Yup.string().required('is riquired'),
    otherwise: Yup.string(),
  }),
  password_confirmation: Yup.string()
    .when('old_password', {
      is: (val: { lenght: any }) => !!val.lenght,
      then: Yup.string().required('is riquired'),
      otherwise: Yup.string(),
    })
    .oneOf([Yup.ref('password'), null], 'incorrect confirmation'),
});
