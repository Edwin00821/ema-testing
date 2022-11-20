import { NextApiRequest, NextApiResponse } from 'next';
import { MCEspecialidad } from 'models';
import { ICEspecialidad } from 'interfaces/Entities';
import { putEspecialidadOfDB } from 'database/Entities/CEspecialidad';

type Data = { message: string } | MCEspecialidad;

const putEspecialidad = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es, nombre_es, valida_es }: ICEspecialidad = req.body;

    const dataEspecialidad= await putEspecialidadOfDB({
      id_es,
      nombre_es,
      valida_es,
    });

    if (!dataEspecialidad) return res.status(404).json({ message: 'Especialidad not found' });

    return res.status(200).json({message: 'Updated Especialidad'});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default putEspecialidad;
