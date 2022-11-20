import { pool, ResultSetHeader } from 'config/db';
import { MMMaterial } from 'models';
import { IMMaterial } from 'interfaces/Entities';

const putMaterialOfDB = async ({ id_mat, url_mat }: IMMaterial) => {
  try {
    if (!id_mat || !url_mat) return null;

    const [RowsDataCMaterial] = await pool.query<ResultSetHeader>(
      'UPDATE MMaterial SET url_mat= ? WHERE id_mat= ?',
      [url_mat, id_mat]
    );

    const { affectedRows } = RowsDataCMaterial;

    if (affectedRows <= 0) return null;

    return RowsDataCMaterial;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putMaterialOfDB;
