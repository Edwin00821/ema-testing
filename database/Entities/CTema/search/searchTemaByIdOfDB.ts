import { pool } from 'config/db';
import { MCTema } from 'models';
import { TemaAdapter } from '../adapter';

const searchTemaByIdOfDB = async (id_tem: number) => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>(
      'SELECT * FROM CTema WHERE id_tem = ?',
      [id_tem]
    );
    const DataTema = TemaAdapter(RowsDataCTema);

    return DataTema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchTemaByIdOfDB;
