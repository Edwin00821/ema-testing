import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteInteligencia,
  getAllInteligencias,
  putInteligencia,
} from './application';
import { postInteligencia } from './application';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllInteligencias(req, res);
    case 'POST':
      return await postInteligencia(req, res);
    case 'PUT':
      return await putInteligencia(req, res);
    case 'DELETE':
      return await deleteInteligencia(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
