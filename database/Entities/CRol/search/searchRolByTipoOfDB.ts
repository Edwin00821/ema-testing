import { pool } from 'config/db';
import { MCRol } from 'models';
import { RolAdapter } from '../adapter';

const searchRolByTipoOfDB = async (tipo_rol: string) => {
  try {
    const [RowsDataCRol] = await pool.query<MCRol[]>(
      'SELECT * FROM CRol WHERE tipo_rol = ?',
      [tipo_rol]
    );

    const DataRol = RolAdapter(RowsDataCRol);

    return DataRol;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchRolByTipoOfDB;
