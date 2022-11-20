import { GeneroAdapter } from './adapter/genero.adapter';
import { pool } from 'config/db';
import { MCGenero } from 'models';

const getAllGenerosOfDB = async () => {
  try {
    const [RowsDataCGenero] = await pool.query<MCGenero[]>(
      'SELECT * FROM CGenero'
    );
    const DataGenero = GeneroAdapter(RowsDataCGenero);

    return DataGenero;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllGenerosOfDB;
