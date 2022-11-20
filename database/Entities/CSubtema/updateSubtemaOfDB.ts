import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';

const updateSubtema = async ({ id_sub, nombre_sub }: ICSubtema) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'UPDATE CEspecialidad SET nombre_sub= ? WHERE id_sub= ?',
      [nombre_sub, id_sub]
    );

    if (RowsDataCSubtema.length <= 0) {
      return null;
    }
    return RowsDataCSubtema[0];
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default updateSubtema;
