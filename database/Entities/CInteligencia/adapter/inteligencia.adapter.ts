import { perseBitToNumber } from 'libs';
import { ICInteligencia } from 'interfaces/Entities';

export const InteligenciaAdapter = (
  RowsDataCInteligencia: ICInteligencia[]
): ICInteligencia[] => {
  if (RowsDataCInteligencia.length === 0) {
    return null;
  }
  return RowsDataCInteligencia.map((inteligencia) => {
    return {
      id_int: inteligencia.id_int,
      tipo_int: inteligencia.tipo_int,
      valida_int: perseBitToNumber(inteligencia.valida_int),
    };
  });
};
