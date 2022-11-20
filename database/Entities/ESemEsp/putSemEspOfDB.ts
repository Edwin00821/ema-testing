import { pool, ResultSetHeader } from 'config/db';
import { IESemEsp } from 'interfaces/Entities';

const putSemEspOfDB = async ({ id_semesp, id_sem }: IESemEsp) => {
  try {
    if (!id_semesp || !id_sem) return null;

    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'UPDATE ESemEsp SET id_semesp = ? WHERE id_sem = ?',
      [id_semesp, id_sem]
    );

    const { affectedRows } = RowsDataDUser;

    if (affectedRows <= 0) return null;

    return RowsDataDUser;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putSemEspOfDB;
