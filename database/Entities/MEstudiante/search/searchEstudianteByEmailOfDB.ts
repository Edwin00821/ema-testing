import { pool } from 'config/db';
import { MMEstudiante } from 'models';
import { EstudianteAdapter } from '../adapter';

const searchEstudianteByEmailOfDB = async (correo_user: string) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<MMEstudiante[]>(
      'SELECT * FROM MEstudiante WHERE correo_user=?',
      [correo_user]
    );

    const DataEstudiante = await EstudianteAdapter(RowsDataMEstudiante);

    return DataEstudiante;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchEstudianteByEmailOfDB;
