import { pool, ResultSetHeader } from 'config/db';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';

const deleteTema = async ({ id_tem, valida_tem }: ICTema) => {
  try {
    if (!id_tem || valida_tem === null) return null;

    const [RowsDataCTema] = await pool.query<ResultSetHeader>(
      'UPDATE CTema SET valida_tem= ? WHERE id_tem= ?',
      [valida_tem, id_tem]
    );

    const { affectedRows } = RowsDataCTema;

    if (affectedRows <= 0) return null;

    return RowsDataCTema;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteTema;
