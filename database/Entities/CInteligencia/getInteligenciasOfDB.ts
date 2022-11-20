import { pool } from 'config/db';
import { MCInteligencia } from 'models';
import { InteligenciaAdapter } from './adapter';

const getInteligenciasOfDB = async () => {
  try {
    const [RowsDataCInteligencia] = await pool.query<MCInteligencia[]>(
      'SELECT * FROM CInteligencia'
    );

    const DataInteligencia = InteligenciaAdapter(RowsDataCInteligencia);

    return DataInteligencia;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getInteligenciasOfDB;
