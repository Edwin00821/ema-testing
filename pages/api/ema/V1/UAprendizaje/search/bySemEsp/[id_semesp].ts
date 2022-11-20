import { NextApiRequest, NextApiResponse } from 'next';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';
import { ResponseUaprendizaje } from 'typings';
import { searchUaprendizajeBySemEspOfDB } from 'database/Entities/CUaprendizaje';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseUaprendizaje>
) {
  switch (req.method) {
    case 'GET': {
      try {
        const { id_semesp } = req.query;

        const dataUaprendizajes = await searchUaprendizajeBySemEspOfDB(
          Number(id_semesp)
        );
        return apiSuccess(res, dataUaprendizajes, 'Uaprendizaje');
      } catch (error) {
        return apiError(res, error, 'searchById');
      }
    }
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
