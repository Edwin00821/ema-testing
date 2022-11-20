import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await Unauthorized(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}

const Unauthorized = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(401).json({ message: 'Unauthorized User' });
};
