import { pool } from 'config/db';
import { MCGenero } from 'models';
import { GeneroAdapter } from '../adapter';

const searchGeneroByTipoOfDB = async (type: string) => {
  try {
    const [RowsDataCGenero] = await pool.query<MCGenero[]>(
      'SELECT * FROM CGenero WHERE tipo_gen = ?',
      [type]
    );

    const DataGenero = GeneroAdapter(RowsDataCGenero);

    return DataGenero;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchGeneroByTipoOfDB;
