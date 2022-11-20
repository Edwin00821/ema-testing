import { NextApiRequest, NextApiResponse } from 'next';
import { MDUser } from 'models';
import { IDUser } from 'interfaces/Entities';
import { putUserOfDB } from 'database/Entities/DUser';

type Data = { message: string } | MDUser;

const putUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { correo_user, password_user, id_rol, id_per, valida_user }: IDUser =
      req.body;

    const dataUser = await putUserOfDB({
      correo_user,
      password_user,
      id_rol,
      id_per,
      valida_user,
    } as IDUser);

    if (!dataUser) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ message: 'Update User' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default putUser;
