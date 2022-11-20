import { pool } from 'config/db';
import { MCEspecialidad } from 'models';
import { EspecialidadAdapter } from './adapter';

const getAllEspecialidadesOfDB = async () => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<MCEspecialidad[]>(
      'SELECT * FROM CEspecialidad'
    );

    const DataEspecialidad = EspecialidadAdapter(RowsDataCEspecialidad);

    return DataEspecialidad;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllEspecialidadesOfDB;
