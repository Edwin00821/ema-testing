import { pool } from 'config/db';
import { MCSemestre } from 'models';
import { SemestreAdapter } from './adapter';

const getAllSemestresOfDB = async () => {
  try {
    const [RowsDataCSemestre] = await pool.query<MCSemestre[]>(
      'SELECT * FROM CSemestre'
    );
    const DataSemestre = SemestreAdapter(RowsDataCSemestre);

    return DataSemestre;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllSemestresOfDB;
