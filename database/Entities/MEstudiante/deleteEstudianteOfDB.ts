import { pool, ResultSetHeader } from 'config/db';
import { MMEstudiante } from 'models';
import { IMEstudiante } from 'interfaces/Entities';

const deleteEstudianteOfDB = async ({
  boleta_est,
  valida_est,
}: IMEstudiante) => {
  try {
    if (!boleta_est || valida_est === null) return null;

    const [RowsDataMEstudiante] = await pool.query<ResultSetHeader>(
      'UPDATE MEstudiante SET valida_est=?  WHERE boleta_est= ?',
      [valida_est, boleta_est]
    );

    const { affectedRows } = RowsDataMEstudiante;

    if (affectedRows <= 0) return null;

    return RowsDataMEstudiante;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteEstudianteOfDB;
