import { pool } from 'config/db';
import { MCGenero } from 'models';
import { GeneroAdapter } from '../adapter';

const searchGeneroByIdOfDB = async (id: number) => {
  try {
    const [RowsDataCGenero] = await pool.query<MCGenero[]>(
      'SELECT * FROM CGenero WHERE id_gen = ?',
      [id]
    );

    const DataGenero = GeneroAdapter(RowsDataCGenero);

    return DataGenero;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchGeneroByIdOfDB;
