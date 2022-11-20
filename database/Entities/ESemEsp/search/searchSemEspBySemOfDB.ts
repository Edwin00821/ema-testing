import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { SemEspAdapter } from '../adapter';

const searchSemEspBySemOfDB = async (id_sem: number) => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp WHERE id_sem = ?',
      [id_sem]
    );

    const DataSemEsp = SemEspAdapter(RowsDataESemEsp);

    return DataSemEsp;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};
export default searchSemEspBySemOfDB;
