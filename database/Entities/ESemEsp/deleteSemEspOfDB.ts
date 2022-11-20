import { pool, ResultSetHeader } from 'config/db';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';

const deleteSemEspOfDB = async ({
  id_semesp,
  id_sem,
  id_es,
  valida_semesp,
}: IESemEsp) => {
  try {
    if (!id_semesp || valida_semesp === null) return null;

    const [RowsDataESemEsp] = await pool.query<ResultSetHeader>(
      'UPDATE CSemestre SET valida_sem= ? WHERE id_sem= ?',
      [valida_semesp, id_semesp]
    );

    const { affectedRows } = RowsDataESemEsp;

    if (affectedRows <= 0) return null;

    return RowsDataESemEsp;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deleteSemEspOfDB;
