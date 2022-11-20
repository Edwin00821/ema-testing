import { pool, ResultSetHeader } from 'config/db';
import { ICGenero } from 'interfaces/Entities';

const deleteGeneroOfDB = async ({ id_gen, valida_gen }: ICGenero) => {
  try {

    if (!id_gen || valida_gen === null) return null;

    console.log(id_gen, valida_gen);
    const [RowsDataCGenero] = await pool.query<ResultSetHeader>(
      'UPDATE CGenero SET valida_gen= ? WHERE id_gen= ?',
      [valida_gen, id_gen]
    );

    const { affectedRows } = RowsDataCGenero;

    if (affectedRows <= 0) return null;

    return RowsDataCGenero;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default deleteGeneroOfDB;
