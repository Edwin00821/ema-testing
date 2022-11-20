import { pool, ResultSetHeader } from 'config/db';
import { ICTema } from 'interfaces/Entities';

const postTemaOfDB = async ({
  id_tem,
  nombre_tem,
  id_par,
  id_ua,
  valida_tem,
}: ICTema) => {
  try {
    const [RowsDataCTema] = await pool.query<ResultSetHeader>(
      'INSERT INTO CTema values (?, ?, ?, ?, ?)',
      [id_tem, nombre_tem, id_par, id_ua, valida_tem]
    );

    const { affectedRows } = RowsDataCTema;

    if (affectedRows <= 0) return null;

    return RowsDataCTema;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postTemaOfDB;
