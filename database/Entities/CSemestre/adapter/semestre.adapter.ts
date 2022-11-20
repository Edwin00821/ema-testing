import { perseBitToNumber } from 'libs';
import { ICSemestre } from 'interfaces/Entities';

export const SemestreAdapter = (RowsDataCSemestre: ICSemestre[]): ICSemestre[] => {
  if (RowsDataCSemestre.length === 0) {
    return null;
  }
  return RowsDataCSemestre.map((semestre) => {
    return {
      id_sem: semestre.id_sem,
      tipo_sem: semestre.tipo_sem,
      valida_sem: perseBitToNumber(semestre.valida_sem),
    };
  });
};
