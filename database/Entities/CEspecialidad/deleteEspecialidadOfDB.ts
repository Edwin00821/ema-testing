import { pool, ResultSetHeader } from 'config/db';
import { ICEspecialidad } from 'interfaces/Entities';

const deleteEspecialidadOfDB = async ({ id_es, valida_es }: ICEspecialidad) => {
  try {
    if (!id_es || valida_es === null) return null;

    const [RowsDataCEspecialidad] = await pool.query<ResultSetHeader>(
      'UPDATE CEspecialidad SET valida_es= ? WHERE id_es= ?',
      [valida_es, id_es]
    );

    const { affectedRows } = RowsDataCEspecialidad;

    if (affectedRows <= 0) return null;

    return RowsDataCEspecialidad;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default deleteEspecialidadOfDB;
