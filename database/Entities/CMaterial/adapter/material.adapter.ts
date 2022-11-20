import { perseBitToNumber } from 'libs';
import { IMMaterial } from 'interfaces/Entities';
import { searchSubtemaByIdOfDB } from 'database/Entities/CSubtema';

export const MaterialAdapter = (
  RowsDataMMaterial: IMMaterial[]
): Promise<IMMaterial[]> => {
  if (RowsDataMMaterial.length === 0) {
    return null;
  }
  return Promise.all(
    RowsDataMMaterial.map(async (material) => {
      const [subtema] = await searchSubtemaByIdOfDB(material.id_sub);
      return {
        id_mat: material.id_mat,
        url_mat: material.url_mat,
        subtema,
        valida_mat: perseBitToNumber(material.valida_mat),
      };
    })
  );
};
