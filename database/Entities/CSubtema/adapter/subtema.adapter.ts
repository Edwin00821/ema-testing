import { perseBitToNumber } from 'libs';
import { ICSubtema } from 'interfaces/Entities';
import { searchTemaByIdOfDB } from 'database/Entities/CTema';

export const SubtemaAdapter = (RowsDataCSubtema: ICSubtema[]): Promise <ICSubtema[]> => {
  if (RowsDataCSubtema.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataCSubtema.map(async (subtema) => {
        const [tema] = await searchTemaByIdOfDB(subtema.id_tem);
        return {
          id_sub: subtema.id_sub,
          nombre_sub: subtema.nombre_sub,
          tema,
          valida_sub: perseBitToNumber(subtema.valida_sub)
        };
      })
  );
};