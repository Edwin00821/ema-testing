import { pool } from 'config/db';
import { MCInteligencia } from 'models';

const searchInteligenciaByTipoOfDB = async (tipo_int: string) => {
  try {
    const [RowsDataCInteligencia] = await pool.query<MCInteligencia[]>(
      'SELECT * FROM CInteligencia WHERE tipo_int = ?',
      [tipo_int]
    );

    if (RowsDataCInteligencia.length === 0) {
      return null;
    }
    return RowsDataCInteligencia;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchInteligenciaByTipoOfDB;
