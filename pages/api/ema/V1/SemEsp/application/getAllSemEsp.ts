import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSemEspOfDB } from 'database/Entities/ESemEsp';
import { ResponseSemEsp } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllSemEsp = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseSemEsp>
) => {
  try {
    const dataSemEsp = await getAllSemEspOfDB();
    return apiSuccess(res, dataSemEsp, 'getAllSemEsp');
  } catch (error) {
    return apiError(res, error, 'getAllSemEsp');
  }
};

export default getAllSemEsp;
