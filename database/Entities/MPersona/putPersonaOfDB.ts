import { pool, ResultSetHeader } from 'config/db';
import { MMPersona } from 'models';
import { IMPersona } from 'interfaces/Entities';

const putPersonaOfDB = async ({
  id_per,
  nombre_per,
  appat_per,
  apmat_per,
  fecha_de_nacimiento_per,
  id_gen,
  id_int,
}: IMPersona) => {
  try {
    if (!id_per || !nombre_per || !appat_per || !apmat_per || !fecha_de_nacimiento_per || !id_gen || !id_int) return null;
    const [RowsDataMPersona] = await pool.query<ResultSetHeader>(
      'UPDATE MPersona SET nombre_per= ?, appat_per=?, apmat_per=?, fecha_de_nacimiento_per=?, id_gen=?, id_int=? WHERE id_per= ?',
      [
        nombre_per,
        appat_per,
        apmat_per,
        fecha_de_nacimiento_per,
        id_gen,
        id_int,
        id_per,
      ]
    );
    console.log(RowsDataMPersona);

    const { affectedRows } = RowsDataMPersona;

    if (affectedRows <= 0) return null;


    return RowsDataMPersona;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default putPersonaOfDB;
