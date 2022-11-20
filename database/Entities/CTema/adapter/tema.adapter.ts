import { perseBitToNumber } from 'libs';
import { ICTema } from 'interfaces/Entities';
import { searchParcialByIdOfDB } from 'database/Entities/CParcial';
import { searchUaprendizajeByIdOfDB } from 'database/Entities/CUaprendizaje';

export const TemaAdapter = (RowsDataCTema: ICTema[]): Promise<ICTema[]> => {
  if (RowsDataCTema.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataCTema.map(async (tema) => {
      const [parcial] = await searchParcialByIdOfDB(tema.id_par);
      const [ua] = await searchUaprendizajeByIdOfDB(tema.id_ua);
      return {
        id_tem: tema.id_tem,
        nombre_tem: tema.nombre_tem,
        parcial,
        ua,
        valida_tem: perseBitToNumber(tema.valida_tem),
      };
    })
  );
};
