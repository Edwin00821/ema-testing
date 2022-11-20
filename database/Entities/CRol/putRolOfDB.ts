import { pool, ResultSetHeader } from 'config/db';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';

const putRolOfDB = async ({ id_rol, tipo_rol }: ICRol) => {
  try {
    if (!id_rol || !tipo_rol) return null;

    const [RowsDataCRol] = await pool.query<ResultSetHeader>(
      'UPDATE CRol SET tipo_rol= ? WHERE id_rol= ?',
      [tipo_rol, id_rol]
    );

    const { affectedRows } = RowsDataCRol;

    if (affectedRows <= 0) return null;

    return RowsDataCRol;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putRolOfDB;
