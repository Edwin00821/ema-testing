import { NextApiRequest, NextApiResponse } from 'next';
import { MMMaterial } from 'models';
import { IMMaterial } from 'interfaces/Entities';
import { deleteMaterialOfDB } from 'database/Entities/CMaterial';

type Data = { message: string } | MMMaterial;

const deleteMaterial = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_mat, url_mat, id_sub, valida_mat }: IMMaterial = req.body;

    const dataMaterial = await deleteMaterialOfDB({
      id_mat,
      url_mat,
      id_sub,
      valida_mat,
    } as IMMaterial);

    if (!dataMaterial)
      return res.status(404).json({ message: 'Material not found' });

    return res.status(200).json({ message: 'Delete Material' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteMaterial;
