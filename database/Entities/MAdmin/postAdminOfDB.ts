import { pool, ResultSetHeader } from 'config/db';
import { IMAdmin } from 'interfaces/Entities';

const postAdminOfDB = async ({
  num_empleado,
  correo_user,
  valida_adm,
}: IMAdmin) => {
  try {
    const [RowsDataMAdmin] = await pool.query<ResultSetHeader>(
      'INSERT INTO MAdmin values (?, ?, ?)',
      [num_empleado, correo_user, valida_adm]
    );

    const { affectedRows } = RowsDataMAdmin;

    if (affectedRows <= 0) return null;

    return RowsDataMAdmin;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postAdminOfDB;
