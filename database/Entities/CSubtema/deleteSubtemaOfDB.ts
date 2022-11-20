import { pool, ResultSetHeader } from 'config/db';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';

const deleteSubtemaOfDB = async ({ id_sub, valida_sub }: ICSubtema) => {
  try {
    if (!id_sub || valida_sub === null) return null;

    const [RowsDataCSubtema] = await pool.query<ResultSetHeader>(
      'UPDATE CSubtema SET valida_sub= ? WHERE id_sub= ?',
      [valida_sub, id_sub]
    );

    const { affectedRows } = RowsDataCSubtema;

    if (affectedRows <= 0) return null;

    return RowsDataCSubtema;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteSubtemaOfDB;
