import { UserAdapter } from './../adapter/user.adapter';
import { pool } from 'config/db';
import { MDUser } from 'models';

const searchUserByIdOfDB = async (id_user: number) => {
  try {
    const [RowsDataDuser] = await pool.query<MDUser[]>(
      'SELECT * FROM DUser WHERE id_user = ?',
      [id_user]
    );

    const DataUser = await UserAdapter(RowsDataDuser);

    return DataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchUserByIdOfDB;
