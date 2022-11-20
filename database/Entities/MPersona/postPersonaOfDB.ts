import { pool, ResultSetHeader } from 'config/db';
import { IMPersona } from 'interfaces/Entities';

const postPersonaOfDB = async ({
  id_per,
  nombre_per,
  appat_per,
  apmat_per,
  fecha_de_nacimiento_per,
  id_gen,
  id_int = 1,
  valida_per,
}: IMPersona) => {
  try {
    console.log(typeof fecha_de_nacimiento_per);

    const year = new Date(fecha_de_nacimiento_per).getFullYear();
    const month = new Date(fecha_de_nacimiento_per).getMonth() + 1;
    const day = new Date(fecha_de_nacimiento_per).getDate();
    const [RowsDataMPersona] = await pool.query<ResultSetHeader>(
      'INSERT INTO MPersona values (?, ?, ?, ?, ?, ?, ?, ?) ',
      [
        id_per,
        nombre_per,
        appat_per,
        apmat_per,
        `${year}-${month}-${day}`,
        id_gen,
        id_int,
        valida_per,
      ]
    );

    const { affectedRows } = RowsDataMPersona;

    if (affectedRows <= 0) return null;

    return RowsDataMPersona;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default postPersonaOfDB;
