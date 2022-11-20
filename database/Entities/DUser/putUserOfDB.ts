import { pool, ResultSetHeader } from 'config/db';
import { IDUser } from 'interfaces/Entities';

const putUserOfDB = async ({ correo_user, password_user }: IDUser) => {
  try {
    if (!correo_user || !password_user) return null;

    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'UPDATE DUser SET password_user = ? WHERE correo_user = ?',
      [password_user, correo_user]
    );

    const { affectedRows } = RowsDataDUser;

    if (affectedRows <= 0) return null;

    return RowsDataDUser;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putUserOfDB;
