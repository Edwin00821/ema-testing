import { pool, ResultSetHeader } from 'config/db';
import { ICSemestre } from 'interfaces/Entities';

const postSemestreOfDB = async ({
  id_sem,
  tipo_sem,
  valida_sem,
}: ICSemestre) => {
  try {
    const [RowsDataCSemestre] = await pool.query<ResultSetHeader>(
      'INSERT INTO CSemestre values (?,?,?)',
      [id_sem, tipo_sem, valida_sem]
    );

    const { affectedRows } = RowsDataCSemestre;

    if (affectedRows <= 0) return null;

    return RowsDataCSemestre;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postSemestreOfDB;
