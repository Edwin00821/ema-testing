import { pool, ResultSetHeader } from 'config/db';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';

const putSemestreOfDB = async ({ id_sem, tipo_sem }: ICSemestre) => {
  try {

    if (!id_sem || !tipo_sem) return null;

    const [RowsDataCSemestre] = await pool.query<ResultSetHeader>(
      'UPDATE CSemestre SET tipo_sem= ? WHERE id_sem= ?',
      [tipo_sem, id_sem]
    );

    const { affectedRows } = RowsDataCSemestre;

    if (affectedRows <= 0) return null;

    return RowsDataCSemestre;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putSemestreOfDB;
