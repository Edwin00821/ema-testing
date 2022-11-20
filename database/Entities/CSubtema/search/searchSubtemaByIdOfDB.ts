import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from '../adapter';

const searchSubtemaByIdOfDB = async (id_sub: number) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema WHERE id_sub = ?',
      [id_sub]
    );

    const DataSubtema = SubtemaAdapter(RowsDataCSubtema);

    return DataSubtema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSubtemaByIdOfDB;
