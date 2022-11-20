import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEstudiantesOfDB } from 'database/Entities/MEstudiante';

const getAllEstudiantes = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const dataEstudiantes = await getAllEstudiantesOfDB();

    return res.status(200).json(dataEstudiantes);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getAllEstudiantes;
