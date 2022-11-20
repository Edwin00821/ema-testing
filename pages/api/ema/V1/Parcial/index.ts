import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteParcial,
  getAllParciales,
  postParcial,
  putParcial,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllParciales(req, res);
    case 'POST':
      return await postParcial(req, res);
    case 'PUT':
      return await putParcial(req, res);
    case 'DELETE':
      return await deleteParcial(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
