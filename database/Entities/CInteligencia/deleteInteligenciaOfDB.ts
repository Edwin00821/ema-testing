import { pool, ResultSetHeader } from 'config/db';
import { MCInteligencia } from 'models';
import { ICInteligencia } from 'interfaces/Entities';

const deleteInteligencia = async ({ id_int, valida_int }: ICInteligencia) => {
  try {
    console.log({ id_int, valida_int });

    if (!id_int || valida_int === null) return null;

    const [RowsDataCInteligencia] = await pool.query<ResultSetHeader>(
      'UPDATE CInteligencia SET valida_int = ? WHERE id_int = ?',
      [valida_int, id_int]
    );
    return RowsDataCInteligencia;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteInteligencia;
