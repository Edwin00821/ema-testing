import { NextApiRequest, NextApiResponse } from 'next';
import { MMMaterial } from 'models';
import { IMMaterial } from 'interfaces/Entities';
import { postMaterialOfDB } from 'database/Entities/CMaterial';

type Data = { message: string } | MMMaterial;

const postMaterial = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_mat, url_mat, id_sub, valida_mat }: IMMaterial = req.body;

    const dataMaterial = await postMaterialOfDB({
      id_mat,
      url_mat,
      id_sub,
      valida_mat,
    } as IMMaterial);

    return res.status(200).json({ message: 'Created Material' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postMaterial;
