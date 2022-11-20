import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteSemestre,
  getAllSemestres,
  postSemestre,
  putSemestre,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllSemestres(req, res);
    case 'POST':
      return await postSemestre(req, res);
    case 'PUT':
      return await putSemestre(req, res);
    case 'DELETE':
      return await deleteSemestre(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
