import { pool, ResultSetHeader } from 'config/db';
import { MCInteligencia } from 'models';
import { ICInteligencia } from 'interfaces/Entities';

const putInteligenciaOfDB = async ({ id_int, tipo_int }: ICInteligencia) => {
  try {
    if (!id_int || !tipo_int) return null;

    const [RowsDataCInteligencia] = await pool.query<ResultSetHeader>(
      'UPDATE CInteligencia SET tipo_int= ? WHERE id_int= ?',
      [tipo_int, id_int]
    );

    console.log(RowsDataCInteligencia);

    const { affectedRows } = RowsDataCInteligencia;

    if (affectedRows <= 0) return null;

    return RowsDataCInteligencia;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putInteligenciaOfDB;
