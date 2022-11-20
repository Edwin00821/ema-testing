import { UserAdapter } from './../adapter/user.adapter';
import { pool } from 'config/db';
import { MDUser } from 'models';

const searchUserByEmailOfDB = async (correo_user: string) => {
  try {
    const [RowsDataDUser] = await pool.query<MDUser[]>(
      'SELECT * FROM DUser WHERE correo_user = ?',
      [correo_user]
    );

    const DataUser = await UserAdapter(RowsDataDUser);

    return DataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchUserByEmailOfDB;
