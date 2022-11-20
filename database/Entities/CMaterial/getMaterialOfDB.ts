  import { pool } from 'config/db';
import { MMMaterial } from 'models';
import { IMMaterial } from 'interfaces/Entities';
import { searchSubtemaByIdOfDB } from '../CSubtema';

const getMaterialesOfDB = async () => {
  try {
    const [RowsDataCMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial'
    );

    if (RowsDataCMaterial.length === 0) {
      return null;
    }

    const DataMaterial = RowsDataCMaterial.map(
      async ({ id_mat, url_mat, id_sub, valida_mat }) => {
        // const valida = Buffer.from(valida_Material).readInt8();
        const subtema = await searchSubtemaByIdOfDB(id_sub);
        // if (valida === 1) {
        return {
          id_mat,
          url_mat,
          id_sub 
          
        };
      }
      //   return null;
      // }
    );

    const DataMaterialFilter = (await Promise.all(DataMaterial)).filter(
      (material) => material !== null
    );  
    return DataMaterialFilter as IMMaterial[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export default getMaterialesOfDB;
