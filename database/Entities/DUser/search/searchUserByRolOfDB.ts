import { UserAdapter } from '../adapter/user.adapter';
import { pool } from 'config/db';
import { MDUser } from 'models';

const searchUserByIdOfDB = async (id_rol: number) => {
  try {
    const [RowsDataDuser] = await pool.query<MDUser[]>(
      'SELECT * FROM DUser WHERE id_rol = ?',
      [id_rol]
    );

    const DataUser = await UserAdapter(RowsDataDuser);

    return DataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchUserByIdOfDB;
