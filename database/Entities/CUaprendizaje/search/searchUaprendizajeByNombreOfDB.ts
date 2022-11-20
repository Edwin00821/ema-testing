import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { UaAdapter } from '../adapter';

const searchUaprendizajeByNombreOfDB = async (nombre_ua: string) => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje WHERE nombre_ua = ?',
      [nombre_ua]
    );

    const DataUA = UaAdapter(RowsDataCUaprendizaje);

    return DataUA;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};
export default searchUaprendizajeByNombreOfDB;
