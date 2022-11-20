import { pool } from 'config/db';
import { MCTema } from 'models';
import { TemaAdapter } from '../adapter';

const searchTemaByParcialAndUa = async (id_par: number, id_ua: number) => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>(
      'SELECT * FROM CTema WHERE id_par = ? AND id_ua = ? ',
      [id_par, id_ua]
    );
    const DataTema = TemaAdapter(RowsDataCTema);

    return DataTema;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchTemaByParcialAndUa;
