  import { pool, ResultSetHeader } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';

const postMaterialOfDB = async ({
  id_mat,
  url_mat,
  id_sub,
  valida_mat,
}: IMMaterial) => {
  try {
    const [RowsDataCMaterial] = await pool.query<ResultSetHeader>(
      'INSERT INTO MMaterial values (?, ?, ?, ?)',
      [id_mat, url_mat, id_sub, valida_mat]
    );

    const { affectedRows } = RowsDataCMaterial;

    if (affectedRows <= 0) return null;

    return RowsDataCMaterial;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default postMaterialOfDB;
