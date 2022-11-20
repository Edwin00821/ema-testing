import { pool, ResultSetHeader } from 'config/db';
import { MMEstudiante } from 'models';
import { IMEstudiante } from 'interfaces/Entities';

const putEstudianteOfDB = async ({
  boleta_est,
  correo_user,
  id_es,
  id_sem,
}: IMEstudiante) => {
  try {
    if (!correo_user || !id_sem || !id_es || !boleta_est) return null;

    const [RowsDataMEstudiante] = await pool.query<ResultSetHeader>(
      'UPDATE MEstudiante SET boleta_est= ?, id_es=?, id_sem=?  WHERE correo_user= ?',
      [boleta_est, id_es, id_sem, correo_user]
    );

    const { affectedRows } = RowsDataMEstudiante;

    if (affectedRows <= 0) return null;

    return RowsDataMEstudiante;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putEstudianteOfDB;
