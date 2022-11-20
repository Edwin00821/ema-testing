import { NextApiRequest, NextApiResponse } from 'next';
import { searchByNumEmpleado } from '../application';
import { ApiResponseAdmin } from 'typings';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse<ApiResponseAdmin>
) {
  switch (req.method) {
    case 'GET':
      const { search } = req.query;
      //   if (search === 'searchPersonaById') {
      //     return res.status(200).json({ String: search });
      //   }
      //   if (search === 'searchPersonaByName') {
      //     return res.status(200).json({ String: search });
      //   }
      if (search === 'searchByNumEmpleado') {
        return await searchByNumEmpleado(req, res);
      }
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
