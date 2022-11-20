import { NextApiRequest, NextApiResponse } from 'next';
import { getAllUsersOfDB } from 'database/Entities/DUser';

const getAllUsers = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dataUsers = await getAllUsersOfDB();
    return res.status(200).json(dataUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getAllUsers;
