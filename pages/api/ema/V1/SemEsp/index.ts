import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteSemEsp,
  getAllSemEsp,
  postSemEsp,
  putSemEsp,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllSemEsp(req, res);
    case 'POST':
      return await postSemEsp(req, res);
    case 'PUT':
      return await putSemEsp(req, res);
    case 'DELETE':
      return await deleteSemEsp(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
