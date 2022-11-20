import { NextApiRequest, NextApiResponse } from 'next';
import { MMAdmin } from 'models';
import { IMAdmin } from 'interfaces/Entities';
import { deleteAdminOfDB } from 'database/Entities/MAdmin';

type Data = { message: string } | MMAdmin;

const deleteAdmin = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const {
        num_empleado,
        correo_user,
        valida_adm
    }: IMAdmin = req.body;

    const dataAdmin = await deleteAdminOfDB({
        num_empleado,
        correo_user,
        valida_adm
    } as IMAdmin);

    if (!dataAdmin)
    return res.status(404).json({ message: 'Admin not found' });

  return res.status(200).json({ message: 'Delete Admin' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteAdmin;
