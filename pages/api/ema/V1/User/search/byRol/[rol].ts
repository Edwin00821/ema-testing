import { NextApiRequest, NextApiResponse } from 'next';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';
import { ResponseUser } from 'typings';
import { searchUserByRolOfDB } from 'database/Entities/DUser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseUser>
) {
  switch (req.method) {
    case 'GET': {
      try {
        const { rol } = req.query;
        const dataPersonas = await searchUserByRolOfDB(Number(rol));
        return apiSuccess(res, dataPersonas, 'Person');
      } catch (error) {
        return apiError(res, error, 'searchByAppatAndApmat');
      }
    }
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
