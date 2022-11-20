import { pool, ResultSetHeader } from 'config/db';
import { MMMaterial } from 'models';
import { IMMaterial } from 'interfaces/Entities';

const deleteMaterial = async ({ id_mat, valida_mat }: IMMaterial) => {
  try {
    if (!id_mat || valida_mat === null) return null;

    const [RowsDataCMaterial] = await pool.query<ResultSetHeader>(
      'UPDATE MMaterial SET valida_mat= ? WHERE id_mat= ?',
      [valida_mat, id_mat]
    );

    const { affectedRows } = RowsDataCMaterial;

    if (affectedRows <= 0) return null;

    return RowsDataCMaterial;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteMaterial;
