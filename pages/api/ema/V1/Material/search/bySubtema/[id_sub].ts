import { searchMaterialBySubtemaOfDB } from 'database/Entities/CMaterial';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseMaterial } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchMaterialBySubtema = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseMaterial>
) => {
  try {
    const { id_sub } = req.query;
    const dataMaterial = await searchMaterialBySubtemaOfDB(Number(id_sub));

    return apiSuccess(res, dataMaterial, 'Material by subtema');
  } catch (error) {
    return apiError(res, error, 'searchMaterialByURL');
  }
};

export default searchMaterialBySubtema;
