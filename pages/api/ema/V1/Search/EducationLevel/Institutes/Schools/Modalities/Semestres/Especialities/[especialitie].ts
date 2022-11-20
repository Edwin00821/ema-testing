import { pool } from 'config/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const { especialidad } = req.query;
      Number(especialidad)
        ? res.status(200).json({ number: especialidad })
        : res.status(200).json({ String: especialidad });

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

const getEspecialidad = async (
  _req: NextApiRequest,
  // res: NextApiResponse<Data> | NextApiResponse<Data[]>
  res: NextApiResponse
) => {
  try {
    const [RowsDataCEspecialidad] = await pool.query(
      'SELECT * FROM CEspecialidad WHERE id_esp = ?'
    );
    console.log(RowsDataCEspecialidad.constructor.name);

    if (Array.isArray(RowsDataCEspecialidad) && RowsDataCEspecialidad.length === 0) {
      return res.status(404).json([{ message: 'Especialidad not found' }]);
    }

    res.status(200).json(RowsDataCEspecialidad);
  } catch (error) {
    console.log(error);
    return res.status(500).json([{ message: 'Something goes wrong' }]);
  }
};
