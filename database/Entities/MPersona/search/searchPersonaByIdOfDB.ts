import { pool } from 'config/db';
import { MMPersona } from 'models';
import { PersonaAdapter } from '../adapter';

const searchPersonaByIdOfDB = async (id_per: number) => {
  try {
    const [RowsDataMPersona] = await pool.query<MMPersona[]>(
      'SELECT * FROM MPersona WHERE id_per = ?',
      [id_per]
    );

    const DataPersona = await PersonaAdapter(RowsDataMPersona);

    return DataPersona;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchPersonaByIdOfDB;
