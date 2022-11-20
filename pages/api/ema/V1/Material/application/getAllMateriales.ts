import { NextApiRequest, NextApiResponse } from 'next';
import { getMaterialesOfDB } from 'database/Entities/CMaterial';
import { ResponseMaterial } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllMateriales = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseMaterial>
) => {
  try {
    const dataMaterial = await getMaterialesOfDB();

    return apiSuccess(res, dataMaterial, 'getAllMateriales');
  } catch (error) {
    return apiError(res, error, 'getAllMateriales');
  }
};

export default getAllMateriales;
