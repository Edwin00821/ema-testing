import * as yup from 'yup';

const SchemaLogin = yup.object({
  correo_user: yup
    .string()
    .email()
    .required('Ups! Necesitamos tu correo para continuar'),
  password_user: yup
    .string()
    .required('Ups! Necesitamos que pongas una contraseña'),
  remember: yup.boolean(),
});
export default SchemaLogin;
