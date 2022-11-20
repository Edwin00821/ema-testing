import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { SemEspAdapter } from '../adapter';

const searchSemEspBySemOfDB = async (id_es: number) => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp WHERE id_es = ?',
      [id_es]
    );

    const DataSemEsp = SemEspAdapter(RowsDataESemEsp);

    return DataSemEsp;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSemEspBySemOfDB;
