import { searchSemestreByIdOfDB } from 'database/Entities/CSemestre';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseSemestre } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchSemestreById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseSemestre>
) => {
  try {
    const { id_sem } = req.query;

    const dataSemestre = await searchSemestreByIdOfDB(Number(id_sem));
    console.log({ dataSemestre });

    return apiSuccess(res, dataSemestre, 'searchSemestreById');
  } catch (error) {
    return apiError(res, error, 'searchSemestreById');
  }
};

export default searchSemestreById;
