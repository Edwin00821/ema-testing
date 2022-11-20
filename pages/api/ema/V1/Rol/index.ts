import { ICRol } from 'interfaces/Entities';
import { NextApiRequest, NextApiResponse } from 'next';
import { deleteRol, getAllRoles, postRol, putRol } from './application';

type Data = { message: string } | ICRol;

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'GET':
      return await getAllRoles(req, res);
    case 'POST':
      return await postRol(req, res);
    case 'PUT':
      return await putRol(req, res);
    case 'DELETE':
      return await deleteRol(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
