import { pool } from 'config/db';
import { MMMaterial } from 'models';
import { MaterialAdapter } from '../adapter';

const searchMaterialByIdOfDB = async (id_sub: number) => {
  try {
    const [RowsDataMMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial WHERE id_sub = ?',
      [id_sub]
    );

    const DataMMaterial = MaterialAdapter(RowsDataMMaterial);
    return DataMMaterial;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchMaterialByIdOfDB;
