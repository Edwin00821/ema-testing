import { NextApiRequest, NextApiResponse } from 'next';
import { deleteTema, getAllTemas, postTema, putTema } from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllTemas(req, res);
    case 'POST':
      return await postTema(req, res);
    case 'PUT':
      return await putTema(req, res);
    case 'DELETE':
      return await deleteTema(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
