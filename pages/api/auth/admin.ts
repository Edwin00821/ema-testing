import { NextApiRequest, NextApiResponse } from 'next';
import { registerAdmin } from './application';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  const { query } = req.query;
  switch (req.method) {
    case 'POST': {
      return res.status(201).json({ message: query });
    }

    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
