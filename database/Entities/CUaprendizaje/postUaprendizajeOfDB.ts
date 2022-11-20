import { pool, ResultSetHeader } from 'config/db';
import { ICUaprendizaje } from 'interfaces/Entities';

const postUaprendizajeOfDB = async ({
  id_ua,
  nombre_ua,
  id_semesp,
  valida_ua,
}: ICUaprendizaje) => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<ResultSetHeader>(
      'INSERT INTO CUaprendizaje values (?, ?, ?, ?)',
      [id_ua, nombre_ua, id_semesp, valida_ua]
    );

    const { affectedRows } = RowsDataCUaprendizaje;

    if (affectedRows <= 0) return null;

    return RowsDataCUaprendizaje;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postUaprendizajeOfDB;
