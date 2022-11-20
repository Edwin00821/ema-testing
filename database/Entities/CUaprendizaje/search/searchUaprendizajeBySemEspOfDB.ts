import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { UaAdapter } from '../adapter';

const searchUaprendizajeBySemEspOfDB = async (id_semesp: number) => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje WHERE id_semesp = ?',
      [id_semesp]
    );

    const DataUA = UaAdapter(RowsDataCUaprendizaje);

    return DataUA;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchUaprendizajeBySemEspOfDB;
