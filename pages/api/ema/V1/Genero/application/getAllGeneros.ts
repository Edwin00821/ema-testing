import { NextApiRequest, NextApiResponse } from 'next';
import { getAllGenerosOfDB } from 'database/Entities/CGenero';
import { ResponseGenero } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllGeneros = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseGenero>
) => {
  try {
    const dataGenero = await getAllGenerosOfDB();

    return apiSuccess(res, dataGenero, 'getAllGeneros');
  } catch (error) {
    return apiError(res, error, 'getAllGeneros');
  }
};

export default getAllGeneros;
