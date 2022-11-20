import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { UaAdapter } from '../adapter';

const searchUaprendizajeByIdOfDB = async (id_ua: number) => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje WHERE id_ua = ?',
      [id_ua]
    );

    const DataUA = UaAdapter(RowsDataCUaprendizaje);

    return DataUA;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default searchUaprendizajeByIdOfDB;
