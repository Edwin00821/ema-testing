import { searchUserByEmailOfDB } from 'database/Entities/DUser';
import { searchEspecialidadByIdOfDB } from 'database/Entities/CEspecialidad';
import { searchSemestreByIdOfDB } from 'database/Entities/CSemestre';

import { IMEstudiante } from 'interfaces/Entities';
import { perseBitToNumber } from 'libs';

export const EstudianteAdapter = (
  RowsDataMEstudiante: IMEstudiante[]
): Promise<IMEstudiante[]> | null => {
  if (RowsDataMEstudiante.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataMEstudiante.map(async (estudiante) => {
      const [user] = await searchUserByEmailOfDB(estudiante.correo_user);
      const [especialidad] = await searchEspecialidadByIdOfDB(estudiante.id_es);
      const [semestre] = await searchSemestreByIdOfDB(estudiante.id_sem);
      return {
        boleta_est: estudiante.boleta_est,
        user,
        especialidad,
        semestre,
        valida_est: perseBitToNumber(estudiante.valida_est),
      };
    })
  );
};
