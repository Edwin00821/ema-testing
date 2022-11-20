import { pool } from 'config/db';
import { MMPersona } from 'models';
import { PersonaAdapter } from './adapter';

const getAllPersonasOfDB = async () => {
  try {
    const [RowsDataMPersona] = await pool.query<MMPersona[]>(
      'SELECT * FROM MPersona'
    );

    const DataPersona = await PersonaAdapter(RowsDataMPersona);

    return DataPersona;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllPersonasOfDB;
