import { pool, ResultSetHeader } from 'config/db';
import { ICParcial } from 'interfaces/Entities';

const postParcialOfDB = async ({
  id_par,
  nombre_par,
  valida_par,
}: ICParcial) => {
  try {
    const [RowsDataCParcial] = await pool.query<ResultSetHeader>(
      'INSERT INTO CParcial values (?, ?, ?)',
      [id_par, nombre_par, valida_par]
    );

    const { affectedRows } = RowsDataCParcial;

    if (affectedRows <= 0) return null;

    return RowsDataCParcial;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postParcialOfDB;
