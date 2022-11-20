import { pool, ResultSetHeader } from 'config/db';
import { MMAdmin } from 'models';
import { IMAdmin } from 'interfaces/Entities';

const putAdminOfDB = async ({ num_empleado, correo_user }: IMAdmin) => {
  try {
    if (!num_empleado || !correo_user) return null;

    const [RowsDataMAdmin] = await pool.query<ResultSetHeader>(
      'UPDATE MAdmin SET num_empleado= ? WHERE correo_user= ?',
      [num_empleado, correo_user]
    );

    const { affectedRows } = RowsDataMAdmin;

    if (affectedRows <= 0) return null;

    return RowsDataMAdmin;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putAdminOfDB;
