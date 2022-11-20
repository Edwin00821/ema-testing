import { NextApiRequest, NextApiResponse } from 'next';
import { getAllAdmins } from '../Admin/application';
import {
  deletePersona,
  getAllPersonas,
  postPersona,
  putPersona,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllPersonas(req, res);
    case 'POST':
      return await postPersona(req, res);
    case 'PUT':
      return await putPersona(req, res);
    case 'DELETE':
      return await deletePersona(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
