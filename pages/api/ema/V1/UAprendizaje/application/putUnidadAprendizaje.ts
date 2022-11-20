import { NextApiRequest, NextApiResponse } from 'next';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { putUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';

type Data = { message: string } | MCUaprendizaje;

const putUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_es, id_sem, valida_ua }: ICUaprendizaje =
      req.body;

    const dataUAprendizaje = await putUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_es,
      id_sem,
      valida_ua,
    } as ICUaprendizaje);

    if (!dataUAprendizaje)
      return res.status(404).json({ message: 'UAprendizaje not found' });

    return res.status(200).json({ message: 'UAprendizaje updated ' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default putUnidadAprendizaje;
