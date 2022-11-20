import { searchSemEspBySemOfDB } from 'database/Entities/ESemEsp';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseSemEsp } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchSemEspBySem = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseSemEsp>
) => {
  try {
    const { id_sem } = req.query;
    
    const dataSemEsp = await searchSemEspBySemOfDB(Number(id_sem));

    if (!dataSemEsp)
      return res.status(404).json({ message: 'SemEsp no encontrada' });

    return apiSuccess(res, dataSemEsp, 'searchSemEspBySem');
  } catch (error) {
    return apiError(res, error, 'searchSemEspBySem');
  }
};

export default searchSemEspBySem;
