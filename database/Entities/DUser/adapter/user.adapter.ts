import { perseBitToNumber } from 'libs';
import { searchRolByIdOfDB } from 'database/Entities/CRol';
import { IDUser } from 'interfaces/Entities';
import { searchPersonaByIdOfDB } from 'database/Entities/MPersona';

export const UserAdapter = (RowsDataIDUser: IDUser[]): Promise<IDUser[]> => {
  if (RowsDataIDUser.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataIDUser.map(async (user) => {
      const [rol] = await searchRolByIdOfDB(user.id_rol);
      const [persona] = await searchPersonaByIdOfDB(user.id_per);

      return {
        correo_user: user.correo_user,
        password_user: user.password_user,
        rol,
        persona,
        valida_user: perseBitToNumber(user.valida_user),
      };
    })
  );
};
