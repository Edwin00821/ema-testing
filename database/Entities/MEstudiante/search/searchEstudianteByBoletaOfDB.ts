import { pool } from 'config/db';
import { MMEstudiante } from 'models';
import { EstudianteAdapter } from '../adapter';

const searchEstudianteByBoletaOfDB = async (boleta_est: string) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<MMEstudiante[]>(
      'SELECT * FROM MEstudiante WHERE boleta_est = ?',
      [boleta_est]
    );

    const DataEstudiante = await EstudianteAdapter(RowsDataMEstudiante);
    console.log(DataEstudiante);

    return DataEstudiante;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchEstudianteByBoletaOfDB;
