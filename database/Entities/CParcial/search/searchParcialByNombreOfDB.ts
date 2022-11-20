import { pool } from 'config/db';
import { MCParcial } from 'models';
import { ParcialAdapter } from '../adapter';

const searchParcialByNombreOfDB = async (nombre_par: string) => {
  try {
    const [RowsDataCParcial] = await pool.query<MCParcial[]>(
      'SELECT * FROM CParcial WHERE nombre_par = ?',
      [nombre_par]
    );

    const DataParcial = ParcialAdapter(RowsDataCParcial);

    return DataParcial;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchParcialByNombreOfDB;
