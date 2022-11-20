import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { SemEspAdapter } from './adapter';

const getAllSemEspOfDB = async () => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp'
    );

    const DataSemEsp = SemEspAdapter(RowsDataESemEsp);
    return DataSemEsp;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllSemEspOfDB;
