import { MMPersona } from 'models';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import {
  postPersonaOfDB,
  searchPersonaByApptAndApmatOfDB,
} from 'database/Entities/MPersona';
import { searchUserByEmailOfDB, postUserOfDB } from 'database/Entities/DUser';
import {
  postEstudianteOfDB,
  searchEstudianteByBoletaOfDB,
} from 'database/Entities/MEstudiante';

import { IRegisterStudent, IPersonalData } from 'interfaces/Auth';

interface Student extends IRegisterStudent, IPersonalData {}

type Data = { message: string };

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  console.log(
    '---------------------------------------------------------Register Student request---------------------------------------------------------'
  );
  try {
    const {
      boleta_est,
      correo_user,
      password_user,
      id_rol = 2,
      id_sem,
      id_es,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per = 1,
      valida_user = 1,
      valida_est = 1,
    } = req.body as Student;

    const persona = await searchPersonaByApptAndApmatOfDB(appat_per, apmat_per);
    if (persona) return res.status(204).end();

    console.log('Persona no existe');

    const user = await searchUserByEmailOfDB(correo_user);
    if (user) return res.status(204).end();

    console.log('Usuario no existe');

    const student = await searchEstudianteByBoletaOfDB(boleta_est);
    if (student) return res.status(204).end();

    console.log('Estudiante no existe');

    const salt = bcrypt.genSaltSync();
    const password_user_hash = bcrypt.hashSync(password_user, salt);

    // const newPersona = await postPersonaOfDB({
    //   id_per: null,
    //   nombre_per,
    //   appat_per,
    //   apmat_per,
    //   fecha_de_nacimiento_per,
    //   id_gen,
    //   id_int,
    //   valida_per,
    // });

    console.log('Persona creada');

    // if (!newPersona || newPersona.constructor.name !== 'ResultSetHeader')
    //   return res.status(500).json({ message: 'Error creating persona' });

    // const { insertId } = newPersona as { insertId: number };

    // const newUser = await postUserOfDB({
    //   correo_user,
    //   password_user: password_user_hash,
    //   id_rol,
    //   id_per: insertId,
    //   valida_user,
    // });

    console.log('Usuario creado');

    // if (!newUser || newUser.constructor.name !== 'ResultSetHeader')
    //   return res.status(500).json({ message: 'Error creating user' });

    // await postEstudianteOfDB({
    //   boleta_est,
    //   correo_user,
    //   id_sem,
    //   id_es,
    //   valida_est,
    // });

    console.log('Estudiante creado');

    console.log(
      '---------------------------------------------------------Registered Student---------------------------------------------------------'
    );

    return res.status(200).json({ message: 'Registered Student' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
export default registerUser;
