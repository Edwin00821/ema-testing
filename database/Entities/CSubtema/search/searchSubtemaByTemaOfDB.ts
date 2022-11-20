import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from '../adapter';

const searchSubtemaByTemaOfDB = async (id_tem: number) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema WHERE id_tem = ?',
      [id_tem]
    );

    const DataSubtema = SubtemaAdapter(RowsDataCSubtema);

    return DataSubtema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSubtemaByTemaOfDB;
