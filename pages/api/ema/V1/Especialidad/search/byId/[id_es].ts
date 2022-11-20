import { searchEspecialidadByIdOfDB } from 'database/Entities/CEspecialidad';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseEspecialidad } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchEspecialidadById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseEspecialidad>
) => {
  try {
    const { id_es } = req.query;
   
    const dataEspecialidad = await searchEspecialidadByIdOfDB(Number(id_es));

    if (!dataEspecialidad)
      return res.status(404).json({ message: 'Especialidad no encontrada' });

    return apiSuccess(res, dataEspecialidad, 'searchEspecialidadById');
  } catch (error) {
    return apiError(res, error, 'searchEspecialidadById');
  }
};

export default searchEspecialidadById;
