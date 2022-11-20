import { NextApiRequest, NextApiResponse } from 'next';
import { MMAdmin } from 'models';
import { IMAdmin } from 'interfaces/Entities';
import { postAdminOfDB } from 'database/Entities/MAdmin';

type Data = { message: string } | MMAdmin;

const postAdmin = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { num_empleado, correo_user, valida_adm }: IMAdmin = req.body;

    const dataAdmin = await postAdminOfDB({
        num_empleado,
        correo_user,
        valida_adm
    } as IMAdmin);

    return res.status(200).json({message: "Admin created"});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postAdmin;
