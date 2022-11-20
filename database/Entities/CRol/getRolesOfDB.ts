import { pool } from 'config/db';
import { MCRol } from 'models';
import { RolAdapter } from './adapter';

const getRoles = async () => {
  try {
    const [RowsDataCRol] = await pool.query<MCRol[]>('SELECT * FROM CRol');

    const DataRol = RolAdapter(RowsDataCRol);

    return DataRol;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getRoles;
