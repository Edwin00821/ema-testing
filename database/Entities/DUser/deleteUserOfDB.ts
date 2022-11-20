import { pool, ResultSetHeader } from 'config/db';
import { MDUser } from 'models';
import { IDUser } from 'interfaces/Entities';

const deleteUserOfDB = async ({ correo_user, valida_user }: IDUser) => {
  try {
    if (!correo_user || valida_user === null) return null;

    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'UPDATE DUser SET valida_user= ? WHERE correo_user= ?',
      [valida_user, correo_user]
    );

    const { affectedRows } = RowsDataDUser;

    if (affectedRows <= 0) return null;

    return RowsDataDUser;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteUserOfDB;
