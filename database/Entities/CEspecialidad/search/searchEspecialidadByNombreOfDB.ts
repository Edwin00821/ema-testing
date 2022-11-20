import { pool } from 'config/db';
import { MCEspecialidad } from 'models';
import { EspecialidadAdapter } from '../adapter';

const searchEspecialidadByNombreOfDB = async (name: string) => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<MCEspecialidad[]>(
      'SELECT * FROM CEspecialidad WHERE nombre_es = ?',
      [name]
    );

    const DataEspecialidad = EspecialidadAdapter(RowsDataCEspecialidad);

    return DataEspecialidad;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};
export default searchEspecialidadByNombreOfDB;
