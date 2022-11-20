import { pool, ResultSetHeader } from 'config/db';
import { ICInteligencia } from 'interfaces/Entities';

const postInteligencia = async ({
  id_int,
  tipo_int,
  valida_int,
}: ICInteligencia) => {
  try {
    const [RowsDataCInteligencia] = await pool.query<ResultSetHeader>(
      'INSERT INTO CInteligencia values (?, ?, ?)',
      [id_int, tipo_int, valida_int]
    );

    return RowsDataCInteligencia;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default postInteligencia;
