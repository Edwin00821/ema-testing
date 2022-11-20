import { pool } from 'config/db';
import { MCParcial } from 'models';
import { ParcialAdapter } from './adapter';

const getAllParcialesOfDB = async () => {
  try {
    const [RowsDataCParcial] = await pool.query<MCParcial[]>(
      'SELECT * FROM CParcial'
    );

    const DataParcial = ParcialAdapter(RowsDataCParcial);

    return DataParcial;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllParcialesOfDB;
