import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser, getAllUsers, postUser, putUser } from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllUsers(req, res);
    case 'POST':
      return await postUser(req, res);
    case 'PUT':
      return await putUser(req, res);
    case 'DELETE':
      return await deleteUser(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
