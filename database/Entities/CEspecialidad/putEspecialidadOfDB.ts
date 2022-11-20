import { pool, ResultSetHeader } from 'config/db';
import { ICEspecialidad } from 'interfaces/Entities';

const putEspecialidadOfDB = async ({ id_es, nombre_es }: ICEspecialidad) => {
  try {
    if (!id_es || !nombre_es) return null;

    const RowsDataCEspecialidad = await pool.query<ResultSetHeader>(
      'UPDATE CEspecialidad SET nombre_es= ? WHERE id_es= ?',
      [nombre_es, id_es]
    );

    console.log(RowsDataCEspecialidad);

    return RowsDataCEspecialidad;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putEspecialidadOfDB;
