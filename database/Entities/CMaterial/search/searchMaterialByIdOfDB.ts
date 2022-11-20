import { pool } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { MMMaterial } from 'models';
import { MaterialAdapter } from '../adapter';

const searchMaterialByIdOfDB = async (id_mat: number) => {
  try {
    const [RowsDataMMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial WHERE id_mat = ?',
      [id_mat]
    );

    const DataMMaterial = MaterialAdapter(RowsDataMMaterial);
    return DataMMaterial;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchMaterialByIdOfDB;
