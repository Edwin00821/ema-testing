import { pool } from 'config/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const { semestre } = req.query;
      Number(semestre)
        ? res.status(200).json({ number: semestre })
        : res.status(200).json({ String: semestre });

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

const getSemestre = async (
  _req: NextApiRequest,
  // res: NextApiResponse<Data> | NextApiResponse<Data[]>
  res: NextApiResponse
) => {
  try {
    const [RowsDataCSemestre] = await pool.query(
      'SELECT * FROM CSemestre WHERE id_sem = ?'
    );
    console.log(RowsDataCSemestre.constructor.name);

    if (Array.isArray(RowsDataCSemestre) && RowsDataCSemestre.length === 0) {
      return res.status(404).json([{ message: 'Semestre not found' }]);
    }

    res.status(200).json(RowsDataCSemestre);
  } catch (error) {
    console.log(error);
    return res.status(500).json([{ message: 'Something goes wrong' }]);
  }
};
