import { NextApiRequest, NextApiResponse } from 'next';
import { MCEspecialidad } from 'models';
import { ICEspecialidad } from 'interfaces/Entities';
import { deleteEspecialidadOfDB } from 'database/Entities/CEspecialidad';
import { apiDeleteSuccess, apiDeleteError } from 'utils';
type Data = { message: string } | MCEspecialidad;

const deleteEspecialidad = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es, nombre_es, valida_es }: ICEspecialidad = req.body;

    const dataEspecialidad = await deleteEspecialidadOfDB({
      id_es,
      nombre_es,
      valida_es,
    });

    return apiDeleteSuccess(res, dataEspecialidad, 'Especialidad');
  } catch (error) {
    return apiDeleteError(res, error, 'Especialidad');
  }
};

export default deleteEspecialidad;
