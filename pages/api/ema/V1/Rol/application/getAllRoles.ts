import { NextApiRequest, NextApiResponse } from 'next';
import { getRoles } from 'database/Entities/CRol';
import { ResponseRol } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllRoles = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseRol>
) => {
  try {
    const dataRol = await getRoles();
    return apiSuccess(res, dataRol, 'getAllRoles');
  } catch (error) {
    return apiError(res, error, 'getAllRoles');
  }
};

export default getAllRoles;
