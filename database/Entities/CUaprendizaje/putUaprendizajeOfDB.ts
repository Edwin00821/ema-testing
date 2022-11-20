import { pool, ResultSetHeader } from 'config/db';
import { ICUaprendizaje } from 'interfaces/Entities';

const putUaprendizajeOfDB = async ({ id_ua, nombre_ua }: ICUaprendizaje) => {
  try {
    if (!id_ua || !nombre_ua) return null;

    const [RowsDataCUaprendizaje] = await pool.query<ResultSetHeader>(
      'UPDATE CUAprendizaje SET nombre_ua = ? WHERE id_ua = ?',
      [nombre_ua, id_ua]
    );

    const { affectedRows } = RowsDataCUaprendizaje;

    if (affectedRows <= 0) return null;

    return RowsDataCUaprendizaje;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putUaprendizajeOfDB;
