import { NextApiRequest, NextApiResponse } from 'next';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { deleteRolOfDB } from 'database/Entities/CRol';

type Data = { message: string } | MCRol;

const deleteRol = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_rol, tipo_rol, valida_rol }: ICRol = req.body;

    const dataRol = await deleteRolOfDB({
      id_rol,
      tipo_rol,
      valida_rol,
    });

    if (!dataRol)
    return res.status(404).json({ message: 'Rol not found' });

    return res.status(200).json({ message: 'Delete Rol' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteRol;
