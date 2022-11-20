import { NextApiRequest, NextApiResponse } from 'next';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';
import { ResponseSemEsp } from 'typings';
import { searchSemEspBySemAndEspOfDB } from 'database/Entities/ESemEsp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseSemEsp>
) {
  try {
    const [id_sem, id_es] = req.query.SemAndEsp;

    const dataSemEsp = await searchSemEspBySemAndEspOfDB(
      Number(id_sem),
      Number(id_es)
    );
    return apiSuccess(res, dataSemEsp, 'SemEsp');
  } catch (error) {
    return apiError(res, error, 'searchSemEsp');
  }
}
