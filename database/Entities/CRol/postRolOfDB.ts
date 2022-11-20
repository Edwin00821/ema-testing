import { pool, ResultSetHeader } from 'config/db';
import { ICRol } from 'interfaces/Entities';

const postRolOfDB = async ({ id_rol, tipo_rol, valida_rol }: ICRol) => {
  try {
    const [RowsDataCRol] = await pool.query<ResultSetHeader>(
      'INSERT INTO CRol values (?,?,?)',
      [id_rol, tipo_rol, valida_rol]
    );

    const { affectedRows } = RowsDataCRol;

    if (affectedRows <= 0) return null;

    return RowsDataCRol;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postRolOfDB;
