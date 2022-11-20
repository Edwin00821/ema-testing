import { ICEspecialidad } from 'interfaces/Entities';

export const EspecialidadDeleteAdapter = (
  RowsDataCEspecialidad: Res[]
): ICEspecialidad[] => {
  const { affectedRows } = RowsDataCEspecialidad;

  if (affectedRows <= 0) return null;
};
