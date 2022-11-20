import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteEspecialidad,
  getAllEspecialidades,
  putEspecialidad,
} from './application';
import { postEspecialidad } from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllEspecialidades(req, res);
    case 'POST':
      return await postEspecialidad(req, res);
    case 'PUT':
      return await putEspecialidad(req, res);
    case 'DELETE':
      return await deleteEspecialidad(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
