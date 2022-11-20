import { perseBitToNumber } from 'libs';
import { IESemEsp } from 'interfaces/Entities';
import { searchSemestreByIdOfDB } from 'database/Entities/CSemestre';
import { searchEspecialidadByIdOfDB } from 'database/Entities/CEspecialidad';

export const SemEspAdapter = (
  RowsDataESemEsp: IESemEsp[]
): Promise<IESemEsp[]> => {
  if (RowsDataESemEsp.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataESemEsp.map(async (semesp) => {
      const [semestre] = await searchSemestreByIdOfDB(semesp.id_sem);
      const [especialidad] = await searchEspecialidadByIdOfDB(semesp.id_es);
      return {
        id_semesp: semesp.id_semesp,
        semestre,
        especialidad,
        valida_semesp: perseBitToNumber(semesp.valida_semesp),
      };
    })
  );
};
