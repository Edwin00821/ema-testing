import { NextApiRequest, NextApiResponse } from 'next';
import { getAllAdminsOfDB } from 'database/Entities/MAdmin';

const getAllAdmins = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dataAdmins = await getAllAdminsOfDB();
    return res.status(200).json(dataAdmins);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getAllAdmins;
