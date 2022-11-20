import { pool } from 'config/db';
import { MMMaterial } from 'models';
import { MaterialAdapter } from '../adapter';

const searchMaterialByURLOfDB = async (url_mat: string) => {
  try {
    const [RowsDataMMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial WHERE url_mat = ?',
      [url_mat]
    );

    const DataMMaterial = MaterialAdapter(RowsDataMMaterial);
    return DataMMaterial;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchMaterialByURLOfDB;
