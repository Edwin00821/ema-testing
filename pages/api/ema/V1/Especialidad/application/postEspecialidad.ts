import { NextApiRequest, NextApiResponse } from 'next';
import { MCEspecialidad } from 'models';
import { ICEspecialidad } from 'interfaces/Entities';
import { postEspecialidadOfDB } from 'database/Entities/CEspecialidad';

type Data = { message: string } | MCEspecialidad;

const postEspecialidad = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es, nombre_es, valida_es }: ICEspecialidad = req.body;

    await postEspecialidadOfDB({
      id_es,
      nombre_es,
      valida_es,
    } as ICEspecialidad);

    return res.status(200).json({ message: 'Created Especialidad' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postEspecialidad;
