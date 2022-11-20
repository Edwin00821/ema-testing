import { perseBitToNumber } from 'libs';
import { ICEspecialidad } from 'interfaces/Entities';

export const EspecialidadAdapter = (
  RowsDataCEspecialidad: ICEspecialidad[]
): ICEspecialidad[] => {
  if (RowsDataCEspecialidad.length === 0) {
    return null;
  }
  return RowsDataCEspecialidad.map((especialidad) => {
    return {
      id_es: especialidad.id_es,
      nombre_es: especialidad.nombre_es,
      valida_es: perseBitToNumber(especialidad.valida_es),
    };
  });
};
