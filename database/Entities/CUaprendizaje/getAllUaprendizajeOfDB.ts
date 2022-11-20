import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { UaAdapter } from './adapter';

const getAllUaprendizajeOfDB = async () => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje'
    );

    const DataUA = await UaAdapter(RowsDataCUaprendizaje);

    return DataUA;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getAllUaprendizajeOfDB;
