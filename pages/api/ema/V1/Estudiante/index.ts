import { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllEstudiantes,
  postEstudiante,
  putEstudiante,
  deleteEstudiante,
} from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllEstudiantes(req, res);
    case 'POST':
      return await postEstudiante(req, res);
    case 'PUT':
      return await putEstudiante(req, res);
    case 'DELETE':
      return await deleteEstudiante(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
