import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from '../adapter';

const searchSubtemaByNombreOfDB = async (nombre_sub: string) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema WHERE nombre_sub = ?',
      [nombre_sub]
    );

    const DataSubtema = SubtemaAdapter(RowsDataCSubtema);

    return DataSubtema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchSubtemaByNombreOfDB;
