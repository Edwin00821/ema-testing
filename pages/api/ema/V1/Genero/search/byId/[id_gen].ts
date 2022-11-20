import { searchGeneroByIdOfDB } from 'database/Entities/CGenero';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseGenero } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchGeneroById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseGenero>
) => {
  try {
    const { id_gen } = req.query;
 
    const dataGenero = await searchGeneroByIdOfDB(Number(id_gen));
    
    return apiSuccess(res, dataGenero, 'searchGeneroById');
  } catch (error) {
    return apiError(res, error, 'searchGeneroById');
  }
};

export default searchGeneroById;
