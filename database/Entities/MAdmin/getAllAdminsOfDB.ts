import { pool } from 'config/db';
import { MMAdmin } from 'models';
import { IMAdmin } from 'interfaces/Entities';
import { searchUserByEmailOfDB } from '../DUser';

const getAllAdminsOfDB = async () => {
  try {
    const [RowsDataMAdmin] = await pool.query<MMAdmin[]>(
      'SELECT * FROM MAdmin'
    );

    if (RowsDataMAdmin.length === 0) {
      return null;
    }

    const DataAdmin = RowsDataMAdmin.map(
      async ({ num_empleado, correo_user, valida_est }) => {
        // const valida = Buffer.from(valida_Admin).readInt8();

        // if (valida === 1) {
        const [user] = await searchUserByEmailOfDB(correo_user);
        //delete user.password_user;
        delete user.valida_user;
        return {
          num_empleado,
          user,
        };
      }
      //   return null;
      // }
    );

    const DataAdminFilter = (await Promise.all(DataAdmin)).filter(
      (admin) => admin !== null
    );

    return DataAdminFilter as IMAdmin[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllAdminsOfDB;
