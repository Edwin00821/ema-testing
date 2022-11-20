import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSubtemasOfDB } from 'database/Entities/CSubtema';
import { ResponseSubtema } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllSubtemas = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseSubtema>
) => {
  try {
    const dataSubtema = await getAllSubtemasOfDB();
    return apiSuccess(res, dataSubtema, 'getAllSubtemas');
  } catch (error) {
    return apiError(res, error, 'getAllSubtemas');
  }
};

export default getAllSubtemas;
