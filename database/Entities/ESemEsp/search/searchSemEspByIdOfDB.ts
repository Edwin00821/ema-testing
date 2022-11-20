import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { SemEspAdapter } from '../adapter';

const searchSemEspBySemAndEspOfDB = async (id_semesp: number) => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp WHERE id_semesp = ?',
      [id_semesp]
    );

    const DataSemEsp = SemEspAdapter(RowsDataESemEsp);

    return DataSemEsp;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSemEspBySemAndEspOfDB;
