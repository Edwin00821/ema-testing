import { pool } from 'config/db';
import { MMPersona } from 'models';
import { PersonaAdapter } from '../adapter/persona.adapter';

const searchPersonaByApptAndApmatOfDB = async (
  appat_per: string,
  apmat_per: string
) => {
  try {
    const [RowsDataMPersona] = await pool.query<MMPersona[]>(
      'SELECT * FROM MPersona WHERE appat_per = ? AND apmat_per = ?',
      [appat_per.toUpperCase(), apmat_per.toUpperCase()]
    );

    const DataPersona = await PersonaAdapter(RowsDataMPersona);

    return DataPersona;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchPersonaByApptAndApmatOfDB;
