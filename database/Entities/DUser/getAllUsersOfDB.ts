import { pool } from 'config/db';
import { MDUser } from 'models';
import { UserAdapter } from './adapter';

const getAllUsersOfDB = async () => {
  try {
    const [RowsDataDUser] = await pool.query<MDUser[]>('SELECT * FROM DUser');

    const DataUser = await UserAdapter(RowsDataDUser);

    return DataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllUsersOfDB;
