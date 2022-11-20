import { perseBitToNumber } from 'libs';
import { ICParcial } from 'interfaces/Entities';

export const ParcialAdapter = (RowsDataCParcial: ICParcial[]): ICParcial[] => {
  if (RowsDataCParcial.length === 0) {
    return null;
  }
  return RowsDataCParcial.map((parcial) => {
    return {
      id_par: parcial.id_par,
      nombre_par: parcial.nombre_par,
      valida_par: perseBitToNumber(parcial.valida_par),
    };
  });
};
