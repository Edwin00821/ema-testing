import * as yup from 'yup';

const SchemaRegisterAcademic = yup
  .object({
    boleta_est: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Ups! Porfavor ingresa una boleta valida')
      .required('Ups! Necesitamos tu nombre para continuar'),

    id_sem: yup.number().required('Ups! Necesitamos tu nombre para continuar'),

    id_es: yup.number().required('Ups! Necesitamos tu nombre para continuar'),

    correo_user: yup
      .string()
      .email()
      .required('Ups! Necesitamos tu correo para continuar'),

    password_user: yup
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/[0-9]/, 'La contraseña debe tener al menos un numero')
      .matches(
        /[a-zñ]/,
        'La contraseña debe tener al menos una letra en minuscula'
      )
      .matches(
        /[A-ZÑ]/,
        'La contraseña debe tener al menos una letra en mayucula'
      )
      .matches(/[^\w]/, 'La contraseña debe tener al menos un simbolo')
      .max(44, 'Debes escribir menos de 45 carcteres')
      .required('Ups! Necesitamos que pongas una contraseña'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password_user'), null], 'Las contraseñas no coinciden')
      .required('Ups! Necesitamos que llenes los campos'),

    check: yup
      .boolean()
      .oneOf([true], 'Debes aceptar los términos')
      .required('Ups! Necesitamos que llenes los campos'),
  })
  .required('Ups! Necesitamos que llenes los campos');

export default SchemaRegisterAcademic;
