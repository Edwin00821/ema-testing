import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteGenero,
  getAllGeneros,
  postGenero,
  putGenero,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllGeneros(req, res);
    case 'POST':
      return await postGenero(req, res);
    case 'PUT':
      return await putGenero(req, res);
    case 'DELETE':
      return await deleteGenero(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
