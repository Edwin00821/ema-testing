import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEspecialidadesOfDB } from 'database/Entities/CEspecialidad';
import { ResponseEspecialidad } from 'typings';
import { apiSuccess, apiError } from 'utils';


const getAllEspecialidades = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseEspecialidad>
) => {
  try {
    const dataEspecialidad = await getAllEspecialidadesOfDB();
    return apiSuccess(res, dataEspecialidad, 'getAllEspecialidades');
  } catch (error) {
    return apiError(res, error, 'getAllEspecialidades');
  }
};

export default getAllEspecialidades;
