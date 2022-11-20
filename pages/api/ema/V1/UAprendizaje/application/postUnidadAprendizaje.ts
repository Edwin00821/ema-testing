import { NextApiRequest, NextApiResponse } from 'next';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { postUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';

type Data = { message: string } | MCUaprendizaje;

const postUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_es, id_sem, valida_ua }: ICUaprendizaje = req.body;

    const dataUAprendizaje = await postUaprendizajeOfDB({
        id_ua,
        nombre_ua,
        id_es,
        id_sem,
        valida_ua
    } as ICUaprendizaje);

    return res.status(200).json({message: "UAprendizaje created"});
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postUnidadAprendizaje;
