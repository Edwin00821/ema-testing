import { pool } from 'config/db';
import { MCTema } from 'models';
import { TemaAdapter } from './adapter';

const getAllTemasOfDB = async () => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>('SELECT * FROM CTema');

    const DataTema = TemaAdapter(RowsDataCTema);

    return DataTema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllTemasOfDB;
