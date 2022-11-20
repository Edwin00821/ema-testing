import { NextApiRequest, NextApiResponse } from 'next';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';
import { ResponseUaprendizaje } from 'typings';
import { searchUaprendizajeByIdOfDB } from 'database/Entities/CUaprendizaje';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseUaprendizaje>
) {
  switch (req.method) {
    case 'GET': {
      try {
        const { id_ua } = req.query;

        const dataUaprendizajes = await searchUaprendizajeByIdOfDB(
          Number(id_ua)
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
