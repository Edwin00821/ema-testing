import { NextApiRequest, NextApiResponse } from 'next';
import { MCInteligencia } from 'models';
import { ICInteligencia } from 'interfaces/Entities';
import { postInteligenciaOfDB } from 'database/Entities/CInteligencia';

type Data = { message: string } | MCInteligencia;

const postInteligencia = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_int, tipo_int, valida_int }: ICInteligencia = req.body;

    await postInteligenciaOfDB({
      id_int,
      tipo_int,
      valida_int,
    } as ICInteligencia);

    return res.status(200).json({message: 'Created Inteligencia'});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postInteligencia;
