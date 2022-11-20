import { NextApiRequest, NextApiResponse } from 'next';
import { MDUser } from 'models';
import { IDUser } from 'interfaces/Entities';
import { postUserOfDB } from 'database/Entities/DUser';

type Data = { message: string } | MDUser;

const postUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { correo_user, password_user, id_rol, id_per, valida_user }: IDUser =
      req.body;

    const dataUser = await postUserOfDB({
      correo_user,
      password_user,
      id_rol,
      id_per,
      valida_user,
    } as IDUser);

    return res.status(200).json({ message: 'Created User' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postUser;
