import { pool } from 'config/db';
import { SemestreAdapter } from '../adapter';
import { MCSemestre } from 'models';

const searchSemestreByIdOfDB = async (id_sem: number) => {
  try {
    const [RowsDataCSemestre] = await pool.query<MCSemestre[]>(
      'SELECT * FROM CSemestre WHERE id_sem = ?',
      [id_sem]
    );

    const DataSemestre = SemestreAdapter(RowsDataCSemestre);

    return DataSemestre;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSemestreByIdOfDB;
