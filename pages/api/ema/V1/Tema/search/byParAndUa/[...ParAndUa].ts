import { NextApiRequest, NextApiResponse } from 'next';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';
import { ResponseSemEsp } from 'typings';
import { searchTemaByParcialAndUa } from 'database/Entities/CTema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseSemEsp>
) {
  try {
    const [id_par, id_ua] = req.query.ParAndUa;

    const dataSemEsp = await searchTemaByParcialAndUa(
      Number(id_par),
      Number(id_ua)
    );
    return apiSuccess(res, dataSemEsp, 'SemEsp');
  } catch (error) {
    return apiError(res, error, 'searchSemEsp');
  }
}
