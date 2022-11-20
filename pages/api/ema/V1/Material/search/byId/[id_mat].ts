import { searchMaterialByIdOfDB } from 'database/Entities/CMaterial';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseMaterial } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchMaterialById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseMaterial>
) => {
  try {
    const { id_mat } = req.query;

    const dataMaterial = await searchMaterialByIdOfDB(Number(id_mat));
    return apiSuccess(res, dataMaterial, 'Material');
  } catch (error) {
    return apiError(res, error, 'Material');
  }
};

export default searchMaterialById;
