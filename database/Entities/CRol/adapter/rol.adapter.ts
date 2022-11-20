import { perseBitToNumber } from 'libs';
import { ICRol } from 'interfaces/Entities';

export const RolAdapter = (RowsDataCRol: ICRol[]): ICRol[] => {
  if (RowsDataCRol.length === 0) {
    return null;
  }
  return RowsDataCRol.map((genero) => {
    return {
      id_rol: genero.id_rol,
      tipo_rol: genero.tipo_rol,
      valida_rol: perseBitToNumber(genero.valida_rol),
    };
  });
};
