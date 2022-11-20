import { pool, ResultSetHeader } from 'config/db';
import { MCParcial } from 'models';
import { ParcialAdapter } from '../adapter';

const searchParcialByIdOfDB = async (id_par: number) => {
  try {
    const [RowsDataCParcial] = await pool.query<MCParcial[]>(
      'SELECT * FROM CParcial WHERE id_par = ?',
      [id_par]
    );

    const DataParcial = ParcialAdapter(RowsDataCParcial);

    return DataParcial;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchParcialByIdOfDB;
