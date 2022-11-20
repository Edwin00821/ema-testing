import { NextApiRequest, NextApiResponse } from 'next';
import { getAllUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';

const getAllUnidades = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dataUnidades = await getAllUaprendizajeOfDB();
    return apiSuccess(res, dataUnidades, 'Unidades');
  } catch (error) {
    return apiError(res, error, 'getAllUnidades');
  }
};

export default getAllUnidades;
