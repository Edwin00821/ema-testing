import { pool, ResultSetHeader } from 'config/db';
import { ICSubtema } from 'interfaces/Entities';

const postSubtemaOfDBfDB = async ({
  id_sub,
  nombre_sub,
  id_tem,
}: ICSubtema) => {
  try {
    const [RowsDataCSubtema] = await pool.query<ResultSetHeader>(
      'INSERT INTO CSubtema values (?,?,?)',
      [id_sub, nombre_sub, id_tem]
    );

    const { affectedRows } = RowsDataCSubtema;

    if (affectedRows <= 0) return null;

    return RowsDataCSubtema;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postSubtemaOfDBfDB;
