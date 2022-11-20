import { pool, ResultSetHeader } from 'config/db';
import { MCGenero } from 'models';
import { ICGenero } from 'interfaces/Entities';

const putGeneroOfDB = async ({ id_gen, tipo_gen }: ICGenero) => {
  try {
    if (!id_gen || !tipo_gen) return null;

    const [RowsDataCGenero] = await pool.query<ResultSetHeader>(
      'UPDATE CGenero SET tipo_gen = ? WHERE id_gen = ?',
      [tipo_gen, id_gen]
    );

    return RowsDataCGenero;
  } catch (error) {
    console.log(error);

    return { message: 'Something goes wrong' };
  }
};

export default putGeneroOfDB;
