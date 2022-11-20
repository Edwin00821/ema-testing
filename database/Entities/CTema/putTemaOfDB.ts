import { pool, ResultSetHeader } from 'config/db';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';

const putTemaOfDB = async ({ id_tem, nombre_tem }: ICTema) => {
  try {
    if (!id_tem || !nombre_tem) return null;

    const [RowsDataCTema] = await pool.query<ResultSetHeader>(
      'UPDATE CTema SET nombre_tem= ? WHERE id_tem= ?',
      [nombre_tem, id_tem]
    );

    const { affectedRows } = RowsDataCTema;

    if (affectedRows <= 0) return null;

    return RowsDataCTema;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putTemaOfDB;
