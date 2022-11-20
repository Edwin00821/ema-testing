import { pool, ResultSetHeader } from 'config/db';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';

const deleteSemestreOfDB = async ({ id_sem, valida_sem }: ICSemestre) => {
  try {

    if (!id_sem || valida_sem === null) return null;

    const [RowsDataCSemestre] = await pool.query<ResultSetHeader>(
      'UPDATE CSemestre SET valida_sem= ? WHERE id_sem= ?',
      [valida_sem, id_sem]
    );

    const { affectedRows } = RowsDataCSemestre;

    if (affectedRows <= 0) return null;

    return RowsDataCSemestre;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteSemestreOfDB;
