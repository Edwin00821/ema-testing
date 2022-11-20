import { NextApiRequest, NextApiResponse } from 'next';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { deleteUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';

type Data = { message: string } | MCUaprendizaje;

const deleteUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_semesp, valida_ua }: ICUaprendizaje = req.body;

    const dataUAprendizaje = await deleteUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_semesp,
      valida_ua,
    } as ICUaprendizaje);

    if (!dataUAprendizaje)
      return res.status(404).json({ message: 'UAprendizaje not found' });

    return res.status(200).json({ message: 'UAprendizaje dada de baja' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteUnidadAprendizaje;
