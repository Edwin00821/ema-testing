import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from './adapter';

const getAllSubtemasOfDB = async () => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema'
    );
    const DataSubtema = SubtemaAdapter(RowsDataCSubtema);

    return DataSubtema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllSubtemasOfDB;
