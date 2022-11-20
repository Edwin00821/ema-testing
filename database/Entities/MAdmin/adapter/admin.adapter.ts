import { searchUserByEmailOfDB } from 'database/Entities/DUser';

import { IMAdmin } from 'interfaces/Entities';
import { perseBitToNumber } from 'libs';

export const AdminAdapter = (
  RowsDataMAdmin: IMAdmin[]
): Promise<IMAdmin[]> | null => {
  if (RowsDataMAdmin.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataMAdmin.map(async (admin) => {
      const [user] = await searchUserByEmailOfDB(admin.correo_user);

      return {
        num_empleado: admin.num_empleado,
        user,
        valida_est: perseBitToNumber(admin.valida_adm),
      };
    })
  );
};
