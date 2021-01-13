import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function GetErrorInputs(err: ValidationError): Errors {
  const validationErros: Errors = {};

  err.inner.forEach((error) => {
    console.log(error);
    // validationErros[error.path] = error.message;
  });
  return validationErros;
}
