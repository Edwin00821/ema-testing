import { NextApiRequest, NextApiResponse } from 'next';
import { MCParcial } from 'models';
import { ICParcial } from 'interfaces/Entities';
import { postParcialOfDB } from 'database/Entities/CParcial';

type Data = { message: string } | MCParcial;

const postParcial = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_par, nombre_par, valida_par }: ICParcial = req.body;

    const dataParcial = await postParcialOfDB({
      id_par,
      nombre_par,
      valida_par
    } as ICParcial);

    return res.status(200).json({message: "Parcial created"});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postParcial;
