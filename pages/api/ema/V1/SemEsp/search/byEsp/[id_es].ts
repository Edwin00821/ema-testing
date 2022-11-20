import { searchSemEspByEspOfDB } from 'database/Entities/ESemEsp';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseRol } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchSemEspByEsp = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseRol>
) => {
  try {
    const { id_es } = req.query;

    const dataSemEsp = await searchSemEspByEspOfDB(Number(id_es));

    if (!dataSemEsp)
      return res.status(404).json({ message: 'SemEsp no encontrada' });

    return apiSuccess(res, dataSemEsp, 'searchSemEspBySem');
  } catch (error) {
    return apiError(res, error, 'searchSemEspBySem');
  }
};

export default searchSemEspByEsp;
