import { pool } from 'config/db';
import { MCEspecialidad } from 'models';
import { EspecialidadAdapter } from '../adapter';

const searchEspecialidadByIdOfDB = async (id: number) => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<MCEspecialidad[]>(
      'SELECT * FROM CEspecialidad WHERE id_es = ?',
      [id]
    );

    const DataEspecialidad = EspecialidadAdapter(RowsDataCEspecialidad);

    return DataEspecialidad;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchEspecialidadByIdOfDB;
