import { NextApiRequest, NextApiResponse } from 'next';
import a from './application/a';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
        //return res.status(200).json({ message: 'Hello World' });
          return await a(req,res);
    case 'POST':
    //   return await createPokemon(req, res);
    case 'PUT':
    //   return await updatePokemon(req, res);
    case 'DELETE':
    //   return await deletePokemon(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}