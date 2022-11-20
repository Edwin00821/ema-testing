import { pool } from 'config/db';
import { MCTema } from 'models';
import { TemaAdapter } from '../adapter';

const searchTemaByIdOfDB = async (nombre_tem: string) => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>(
      'SELECT * FROM CTema WHERE nombre_tem = ?',
      [nombre_tem]
    );

    const DataTema = TemaAdapter(RowsDataCTema);

    return DataTema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchTemaByIdOfDB;
