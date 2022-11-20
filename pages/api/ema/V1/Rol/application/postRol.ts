import { NextApiRequest, NextApiResponse } from 'next';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { postRolOfDB } from 'database/Entities/CRol';

type Data = { message: string } | MCRol;

const postRol = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_rol, tipo_rol, valida_rol }: ICRol = req.body;

    const dataRol = await postRolOfDB({
      id_rol,
      tipo_rol,
      valida_rol
    } as ICRol);

    return res.status(200).json({message: 'Created Rol'});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postRol;
