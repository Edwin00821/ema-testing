import { NextApiRequest, NextApiResponse } from 'next';
import { MCParcial } from 'models';
import { ICParcial } from 'interfaces/Entities';
import { deleteParcialOfDB } from 'database/Entities/CParcial';

type Data = { message: string } | MCParcial;

const deleteParcial = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_par, nombre_par, valida_par }: ICParcial = req.body;

    const dataParcial = await deleteParcialOfDB({
      id_par,
      nombre_par,
      valida_par,
    });

    if (!dataParcial)
      return res.status(404).json({ message: 'Parcial not found' });

    return res.status(200).json({ message: 'Parcial dado de baja' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteParcial;
