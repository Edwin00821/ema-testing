import { NextApiRequest, NextApiResponse } from 'next';
import { MCParcial } from 'models';
import { ICParcial } from 'interfaces/Entities';
import { putParcialOfDB } from 'database/Entities/CParcial';

type Data = { message: string } | MCParcial;

const putParcial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_par, nombre_par, valida_par }: ICParcial = req.body;

    const dataParcial = await putParcialOfDB({
      id_par,
      nombre_par,
      valida_par,
    });

    if (!dataParcial)
      return res.status(404).json({ message: 'Parcial not found' });

    return res.status(200).json({ message: 'Parcial updated' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default putParcial;
