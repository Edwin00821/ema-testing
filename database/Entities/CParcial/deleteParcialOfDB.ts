import { pool, ResultSetHeader } from 'config/db';
import { MCParcial } from 'models';
import { ICParcial } from 'interfaces/Entities';

const deleteParcial = async ({ id_par, valida_par }: ICParcial) => {
  try {
    const [RowsDataCParcial] = await pool.query<ResultSetHeader>(
      'UPDATE CParcial SET valida_par= ? WHERE id_par= ?',
      [valida_par, id_par]
    );

    const { affectedRows } = RowsDataCParcial;

    if (affectedRows <= 0) return null;

    return RowsDataCParcial;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteParcial;
