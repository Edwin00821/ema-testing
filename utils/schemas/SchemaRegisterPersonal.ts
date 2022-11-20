import * as yup from 'yup';

const YEAR_NOW = new Date().getFullYear();
const YEAR_MIN = YEAR_NOW - 100;

const SchemaRegisterPersonal = yup.object({
  nombre_per: yup
    .string()
    .trim()
    .uppercase()
    .matches(
      /^[a-zA-ZÑñ ]+$/,
      'Ups! Recuerda que no puedes ingrsar números ni caracteres especiales'
    )
    .min(3, 'Debes escribir al menos 3 letras')
    .max(45, 'Debes escribir menos de 45 carcteres')
    .required('Ups! Necesitamos tu nombre para continuar'),

  appat_per: yup
    .string()
    .trim()
    .uppercase()
    .matches(
      /^[a-zA-ZÑñ ]+$/,
      'Ups! Recuerda que no puedes ingrsar números ni caracteres especiales'
    )
    .min(3, 'Debes escribir al menos 3 caracteres')
    .max(45, 'Debes escribir menos de 45 carcteres')
    .required('Ups! Necesitamos tu apellido paterno para continuar'),

  apmat_per: yup
    .string()
    .trim()
    .uppercase()
    .matches(
      /^[a-zA-ZÑñ ]+$/,
      'Ups! Recuerda que no puedes ingrsar números ni caracteres especiales'
    )
    .min(3, 'Debes escribir al menos 3 letras')
    .max(45, 'Debes escribir menos de 45 carcteres')
    .required('Ups! Necesitamos tu apellido materno para continuar'),

  fecha_de_nacimiento_per: yup
    .date()
    .typeError('Ups! Debes ingresar una fecha válida')
    .min(
      new Date(YEAR_MIN, 0, 1),
      'Ups! Porfavor ingresa una fecha de nacimiento valida'
    )
    .max(
      new Date(YEAR_NOW - 15, 11, 31),
      'Ups! Debes ser mayor de edad para continuar'
    )
    .required('Ups! Necesitamos tu fecha de nacimiento para continuar'),

  id_gen: yup
    .number()
    .typeError('Ups! Porfavor ingresa un genero valido')
    .required('Ups! Necesitamos tu genero para continuar'),
});

export default SchemaRegisterPersonal;
