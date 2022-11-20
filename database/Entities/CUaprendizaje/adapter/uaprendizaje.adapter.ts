import { perseBitToNumber } from 'libs';
import { ICUaprendizaje } from 'interfaces/Entities';
import { searchSemEspByIdOfDB } from 'database/Entities/ESemEsp';

export const UaAdapter = (
  RowsDataCUa: ICUaprendizaje[]
): Promise<ICUaprendizaje[]> => {
  if (RowsDataCUa.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataCUa.map(async (ua) => {
      const [semesp] = await searchSemEspByIdOfDB(ua.id_semesp);

      return {
        id_ua: ua.id_ua,
        nombre_ua: ua.nombre_ua,
        semesp,
        valida_ua: perseBitToNumber(ua.valida_ua),
      };
    })
  );
};
