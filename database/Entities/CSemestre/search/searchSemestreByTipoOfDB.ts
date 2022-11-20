import { pool } from 'config/db';
import { MCSemestre } from 'models';
import { SemestreAdapter } from '../adapter';

const searchSemestreByTipoOfDB = async (tipo_sem: string) => {
  try {
    const [RowsDataCSemestre] = await pool.query<MCSemestre[]>(
      'SELECT * FROM CSemestre WHERE tipo_sem = ?',
      [tipo_sem]
    );

    const DataSemestre = SemestreAdapter(RowsDataCSemestre);

    return DataSemestre;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSemestreByTipoOfDB;
