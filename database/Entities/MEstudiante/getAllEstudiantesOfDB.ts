import { pool } from 'config/db';
import { MMEstudiante } from 'models';
import { EstudianteAdapter } from './adapter/estudiante.adapter';

const getAllEstudiantesOfDB = async () => {
  try {
    const [RowsDataMEstudiante] = await pool.query<MMEstudiante[]>(
      'SELECT * FROM MEstudiante'
    );

    const DataEstudiante = EstudianteAdapter(RowsDataMEstudiante);

    return DataEstudiante;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllEstudiantesOfDB;
