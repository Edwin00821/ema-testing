import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteSubtema,
  getAllSubtemas,
  postSubtema,
  putSubtema,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllSubtemas(req, res);
    case 'POST':
      return await postSubtema(req, res);
    case 'PUT':
      return await putSubtema(req, res);
    case 'DELETE':
      return await deleteSubtema(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
