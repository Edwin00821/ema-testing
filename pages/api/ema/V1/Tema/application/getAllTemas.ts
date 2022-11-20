import { NextApiRequest, NextApiResponse } from 'next';
import { getAllTemasOfDB } from 'database/Entities/CTema';
import { ResponseTema } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllTemas = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseTema>
) => {
  try {
    const dataTema = await getAllTemasOfDB();
    return apiSuccess(res, dataTema, 'getAllTemas');
  } catch (error) {
    return apiError(res, error, 'getAllTemas');
  }
};

export default getAllTemas;
