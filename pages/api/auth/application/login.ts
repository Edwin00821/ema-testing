import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

import { searchUserByEmailOfDB } from 'database/Entities/DUser';

import { searchEstudianteByEmailOfDB } from 'database/Entities/MEstudiante';
import { ICRol } from 'interfaces/Entities';

type LoginResponse = { message: string; rol?: ICRol };
const loginUser = async (
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) => {
  const { correo, password, remember } = req.body;

  console.log(
    '-----------------------------------------------------------Login request-----------------------------------------------------------'
  );

  const [searchUser] = await searchUserByEmailOfDB(correo);
  const { rol } = searchUser;

  if (!searchUser)
    return res.status(404).json({ message: 'Credenciales Invalidas' });

  const validPassword = bcrypt.compareSync(password, searchUser.password_user);

  if (!validPassword)
    return res.status(404).json({ message: 'Credenciales Invalidas' });

  const [searchStudent] = await searchEstudianteByEmailOfDB(
    searchUser.correo_user
  );
  const searchAdmin = null;
  // const [searchAdmin] = await searchAdminByEmailOfDB(searchUser.correo_user);

  delete searchStudent.user.password_user;

  const token = jwt.sign(
    {
      ...searchStudent,
      ...searchAdmin,
      exp: remember
        ? Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
        : Math.floor(Date.now() / 1000) + 60 * 5,
    },
    process.env.JWT_SECRET_SEED
  );

  // const data = jwt.verify(token, process.env.JWT_SECRET_SEED);

  const serializedToken = serialize('Authorization', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 5,
    path: '/',
  });

  res.setHeader('Set-Cookie', serializedToken);
  console.log({ serializedToken });

  res.status(200).json({
    message: 'Login Success',
    rol,
  });
};

export default loginUser;
