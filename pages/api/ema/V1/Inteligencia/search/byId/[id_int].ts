import { searchInteligenciaByIdOfDB } from 'database/Entities/CInteligencia';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseInteligencia } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchInteligenciaById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseInteligencia>
) => {
  try {
    const { id_int } = req.query;
    
    const dataInteligencia = await searchInteligenciaByIdOfDB(Number(id_int));

    if (!dataInteligencia)
      return res.status(404).json({ message: 'Inteligencia no encontrada' });

    return apiSuccess(res, dataInteligencia, 'searchInteligenciaById');
  } catch (error) {
    return apiError(res, error, 'searchInteligenciaById');
  }
};

export default searchInteligenciaById;
