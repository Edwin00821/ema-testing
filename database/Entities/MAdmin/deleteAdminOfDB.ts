import { pool, ResultSetHeader } from 'config/db';
import { MMAdmin } from 'models';
import { IMAdmin } from 'interfaces/Entities';

const deleteAdminOfDB = async ({ valida_adm, num_empleado }: IMAdmin) => {
  try {

    if (!num_empleado || valida_adm === null) return null;

    const [RowsDataMAdmin] = await pool.query<ResultSetHeader>(
      'UPDATE MAdmin SET valida_adm= ? WHERE num_empleado= ?',
      [valida_adm, num_empleado]
    );

    const { affectedRows } = RowsDataMAdmin;

    if (affectedRows <= 0) return null;

    return RowsDataMAdmin;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteAdminOfDB;
