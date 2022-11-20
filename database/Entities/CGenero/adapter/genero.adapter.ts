import { perseBitToNumber } from 'libs';
import { ICGenero } from 'interfaces/Entities';

export const GeneroAdapter = (RowsDataCGenero: ICGenero[]): ICGenero[] => {
  if (RowsDataCGenero.length === 0) {
    return null;
  }
  return RowsDataCGenero.map((genero) => {
    return {
      id_gen: genero.id_gen,
      tipo_gen: genero.tipo_gen,
      valida_gen: perseBitToNumber(genero.valida_gen),
    };
  });
};
