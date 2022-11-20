import { NextApiRequest, NextApiResponse } from 'next';
import { MCInteligencia } from 'models';
import { ICInteligencia } from 'interfaces/Entities';
import { deleteInteligenciaOfDB } from 'database/Entities/CInteligencia';

type Data = { message: string } | MCInteligencia;

const deleteInteligencia = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_int, tipo_int, valida_int }: ICInteligencia = req.body;

    const dataInteligencia = await deleteInteligenciaOfDB({
      id_int,
      tipo_int,
      valida_int,
    });
    console.log({ dataInteligencia });
    
    if (!dataInteligencia)
      return res.status(404).json({ message: 'Inteligencia not found' });

    return res.status(200).json({message: 'Inteligencia deleted'});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteInteligencia;
