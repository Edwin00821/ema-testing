import { NextApiRequest, NextApiResponse } from 'next';
import { loginUser } from './application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      return await loginUser(req, res);
    }

    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
