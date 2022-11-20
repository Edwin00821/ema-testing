import { searchRolByIdOfDB } from 'database/Entities/CRol';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseRol } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchRolById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseRol>
) => {
  try {
    const { id_rol } = req.query;
    
    const dataRol = await searchRolByIdOfDB(Number(id_rol));

    if (!dataRol)
      return res.status(404).json({ message: 'Rol no encontrada' });

    return apiSuccess(res, dataRol, 'searchRolById');
  } catch (error) {
    return apiError(res, error, 'searchRolById');
  }
};

export default searchRolById;
