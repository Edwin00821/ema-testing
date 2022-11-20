import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUnidadAprendizaje, getAllUnidades, postUnidadAprendizaje, putUnidadAprendizaje } from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllUnidades(req, res);
    case 'POST':
      return await postUnidadAprendizaje(req, res);
    case 'PUT':
      return await putUnidadAprendizaje(req, res);
    case 'DELETE':
      return await deleteUnidadAprendizaje(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
