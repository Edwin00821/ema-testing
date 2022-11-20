import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseInteligencia } from 'typings';
import { apiSuccess, apiError } from 'utils';
import { getInteligenciasOfDB } from 'database/Entities/CInteligencia';

const getAllInteligencias = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseInteligencia>
) => {
  try {
    const dataInteligencia = await getInteligenciasOfDB();
    return apiSuccess(res, dataInteligencia, 'getAllInteligencias');
  } catch (error) {
    return apiError(res, error, 'getAllInteligencias');
  }
};

export default getAllInteligencias;
