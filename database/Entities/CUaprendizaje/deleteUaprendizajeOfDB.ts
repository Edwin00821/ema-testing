import { pool, ResultSetHeader } from 'config/db';
import { ICUaprendizaje } from 'interfaces/Entities';

const deleteUaprendizajeOfDB = async ({ id_ua, valida_ua }: ICUaprendizaje) => {
  try {

    if (!id_ua || valida_ua === null) return null;

    const [RowsDataCUaprendizaje] = await pool.query<ResultSetHeader>(
      'UPDATE CUAprendizaje SET valida_ua= ? WHERE id_ua= ?',
      [valida_ua, id_ua]
    );
    
    const { affectedRows } = RowsDataCUaprendizaje;

    if (affectedRows <= 0) return null;

    return RowsDataCUaprendizaje;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteUaprendizajeOfDB;
