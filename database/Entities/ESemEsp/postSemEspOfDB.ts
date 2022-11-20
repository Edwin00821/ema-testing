import { pool, ResultSetHeader } from 'config/db';
import { IESemEsp } from 'interfaces/Entities';

const postSemEspOfDB = async ({
    id_semesp,
    id_sem,
    id_es,
    valida_semesp
}: IESemEsp) => {
  try {
    const [RowsDataESemEsp] = await pool.query<ResultSetHeader>(
      'INSERT INTO DUser values (?, ?, ?, ?)',
      [id_semesp, id_sem, id_es, valida_semesp]
    );

    const { affectedRows } = RowsDataESemEsp;

    if (affectedRows <= 0) return null;

    return RowsDataESemEsp;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong' };
  }
};

export default postSemEspOfDB;
