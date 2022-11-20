import { pool, ResultSetHeader } from 'config/db';
import { IDUser } from 'interfaces/Entities';

const postUserOfDB = async ({
  correo_user,
  password_user,
  id_rol,
  id_per,
  valida_user,
}: IDUser) => {
  try {
    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'INSERT INTO DUser values (?, ?, ?, ?, ?)',
      [correo_user, password_user, id_rol, id_per, valida_user]
    );

    const { affectedRows } = RowsDataDUser;

    if (affectedRows <= 0) return null;

    return RowsDataDUser;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postUserOfDB;
