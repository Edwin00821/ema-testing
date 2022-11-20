import { pool, ResultSetHeader } from 'config/db';
import { MMPersona } from 'models';
import { IMPersona } from 'interfaces/Entities';

const deletePersonaOfDB = async ({ id_per, valida_per }: IMPersona) => {
  try {
    console.log(valida_per  )
    if (!id_per || valida_per === null) return null;
    
    const [RowsDataMPersona] = await pool.query<ResultSetHeader>(
      'UPDATE MPersona SET valida_per=? WHERE id_per= ?',
      [valida_per, id_per]
    );
    const { affectedRows } = RowsDataMPersona;

    if (affectedRows <= 0) return null;

    return RowsDataMPersona;
  } catch (error) {
    console.log(error);
    return { message: 'Something goes wrong', error };
  }
};

export default deletePersonaOfDB;
