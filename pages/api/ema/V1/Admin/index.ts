import { NextApiRequest, NextApiResponse } from 'next';
import { deleteAdmin, getAllAdmins, postAdmin, putAdmin } from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllAdmins(req, res);
    case 'POST':
      return await postAdmin(req, res);
    case 'PUT':
      return await putAdmin(req, res);
    case 'DELETE':
      return await deleteAdmin(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
