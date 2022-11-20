import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSemestresOfDB } from 'database/Entities/CSemestre';
import { ResponseSemestre } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllSemestres = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseSemestre>
) => {
  try {
    const dataSemestre = await getAllSemestresOfDB();
    return apiSuccess(res, dataSemestre, 'getAllSemestres');
  } catch (error) {
    return apiError(res, error, 'getAllSemestres');
  }
};

export default getAllSemestres;
