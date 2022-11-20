import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSubtopics } from './application';
// import { DataSubtopic } from 'typings';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllSubtopics(req, res);
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
