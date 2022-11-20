import { pool, ResultSetHeader } from 'config/db';
import { ICGenero } from 'interfaces/Entities';

const postGeneroOfDB = async ({ id_gen, tipo_gen, valida_gen }: ICGenero) => {
  try {
    const [RowsDataCGenero] = await pool.query<ResultSetHeader>(
      'INSERT INTO CGenero values (?, ?, ?)',
      [id_gen, tipo_gen, valida_gen]
    );
    return RowsDataCGenero;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default postGeneroOfDB;
