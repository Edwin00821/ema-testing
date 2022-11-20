import { pool, ResultSetHeader } from 'config/db';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';

const deleteRolOfDB = async ({ id_rol, valida_rol }: ICRol) => {
  try {
    if (!id_rol || valida_rol === null) return null;

    const [RowsDataCRol] = await pool.query<ResultSetHeader>(
      'UPDATE CRol SET valida_rol= ? WHERE id_rol= ?',
      [valida_rol, id_rol]
    );

    const { affectedRows } = RowsDataCRol;

    if (affectedRows <= 0) return null;

    return RowsDataCRol;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteRolOfDB;
