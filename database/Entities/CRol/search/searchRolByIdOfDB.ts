import { pool } from 'config/db';
import { MCRol } from 'models';
import { RolAdapter } from '../adapter';

const searchRolByIdOfDB = async (id_rol: number) => {
  try {
    const [RowsDataCRol] = await pool.query<MCRol[]>(
      'SELECT * FROM CRol WHERE id_rol = ?',
      [id_rol]
    );

    const DataRol = RolAdapter(RowsDataCRol);

    return DataRol;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchRolByIdOfDB;
