import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { signToken } from 'libs/jwt';
// import { searchPersonaByEmialAndPass } from 'database/Entities/MPersona/application/search';
// import { postPersonas } from 'database/Entities/MPersona';
import { IMEstudiante, IMAdmin } from 'interfaces/Entities';

type Data =
  | { message: string }
  | {
      token: string;
      estudiante: IMEstudiante;
    }
  | {
      token: string;
      admin: IMAdmin;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return registerUser(req, res);

    default:
      res.status(405).json({
        message: 'Bad request',
      });
  }
}

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const a = req.body as IMEstudiante;
  console.log(a);

  // const {
  //   id_per = null,
  //   valida_per = true,
  //   nombre_per = 'Edwin Uriel',
  //   appat_per = 'Astudillo',
  //   apmat_per = 'Perez',
  //   edad_per = 17,
  //   tel_per = '7475456024',
  //   correo_per = '',
  //   pass_per = '123456789',
  //   id_rol = 2,
  //   id_int = 1,
  //   id_gen = 1,
  // } = req.body as IMEstudiante;

  // if (pass_per.length < 8) {
  //   return res.status(400).json({
  //     message: 'La contraseña debe de ser de minimo de 8 caracteres',
  //   });
  // }

  // if (nombre_per.length < 2) {
  //   return res.status(400).json({
  //     message: 'El nombre debe de ser de 2 caracteres',
  //   });
  // }

  // if (appat_per.length < 2) {
  //   return res.status(400).json({
  //     message: 'El apellido paterno debe de ser de 2 caracteres',
  //   });
  // }

  // if (apmat_per.length < 2) {
  //   return res.status(400).json({
  //     message: 'El apellido materno debe de ser de 2 caracteres',
  //   });
  // }

  // if (tel_per.length < 10) {
  //   return res.status(400).json({
  //     message: 'El telefono debe de ser de 10 caracteres',
  //   });
  // }

  // if (correo_per.length < 10) {
  //   return res.status(400).json({
  //     message: 'El correo debe de ser de 10 caracteres',
  //   });
  // }

  // const salt = bcrypt.genSaltSync();
  // const hash = bcrypt.hashSync(pass_per, salt);

  // const persona: IMEstudiante = {
  //   id_per,
  //   valida_per,
  //   nombre_per,
  //   appat_per,
  //   apmat_per,
  //   edad_per,
  //   tel_per,
  //   correo_per,
  //   pass_per: hash,
  //   id_rol,
  //   id_int,
  //   id_gen,
  // };

  // const token = signToken(String(persona.id_per), persona.correo_per);

  // return res.status(200).json({
  //   token,
  //   persona,
  // });
  return res.status(200).json({
    message: 'Hola',
  });
};
