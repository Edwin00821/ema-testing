import { NextApiRequest, NextApiResponse } from 'next';
import { searchByNumEmpleado } from '../application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await searchByNumEmpleado(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
