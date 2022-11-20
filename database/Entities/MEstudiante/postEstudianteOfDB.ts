import { pool, ResultSetHeader } from 'config/db';
import { IMEstudiante } from 'interfaces/Entities';

const postEstudianteOfDB = async ({
  boleta_est,
  correo_user,
  id_es,
  id_sem,
  valida_est,
}: IMEstudiante) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<ResultSetHeader>(
      'INSERT INTO MEstudiante values (?, ?, ?, ?, ?)',
      [boleta_est, correo_user, id_es, id_sem, valida_est]
    );

    const { affectedRows } = RowsDataMEstudiante;

    if (affectedRows <= 0) return null;

    return RowsDataMEstudiante;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postEstudianteOfDB;
