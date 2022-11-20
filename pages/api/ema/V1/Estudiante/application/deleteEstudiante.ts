import { NextApiRequest, NextApiResponse } from 'next';
import { MMEstudiante } from 'models';
import { IMEstudiante } from 'interfaces/Entities';
import { deleteEstudianteOfDB } from 'database/Entities/MEstudiante';

type Data = { message: string } | MMEstudiante;

const deleteEstudiante = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { boleta_est, correo_user, id_es, id_sem, valida_est }: IMEstudiante =
      req.body;

    const dataEstudiante = await deleteEstudianteOfDB({
      boleta_est,
      correo_user,
      id_es,
      id_sem,
      valida_est,
    } as IMEstudiante);

    if (!dataEstudiante)
      return res.status(404).json({ message: 'Estudiante not found' });

    return res.status(200).json({ message: 'Delete Estudiante' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteEstudiante;
