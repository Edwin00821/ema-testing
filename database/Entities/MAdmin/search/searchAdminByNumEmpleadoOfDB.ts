import { pool } from 'config/db';
import { MMAdmin } from 'models';

const searchAdminByNumEmpleadoOfDB = async (num_empleado: number) => {
  try {
    const [RowsDataMAdmin] = await pool.query<MMAdmin[]>(
      'SELECT * FROM MAdmin WHERE num_empleado = ?',
      [num_empleado]
    );

    if (RowsDataMAdmin.length === 0) {
      return null;
    }
    return RowsDataMAdmin[0];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchAdminByNumEmpleadoOfDB;
