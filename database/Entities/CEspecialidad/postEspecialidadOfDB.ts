import { pool, ResultSetHeader } from 'config/db';
import { ICEspecialidad } from 'interfaces/Entities';

const postEspecialidadOfDB = async ({
  id_es,
  nombre_es,
  valida_es,
}: ICEspecialidad) => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<ResultSetHeader>(
      'INSERT INTO CEspecialidad values (?, ?, ?)',
      [id_es, nombre_es, valida_es]
    );

    const { affectedRows } = RowsDataCEspecialidad;

    if (affectedRows <= 0) return null;

    return RowsDataCEspecialidad;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default postEspecialidadOfDB;
