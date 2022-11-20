import { searchParcialByIdOfDB } from 'database/Entities/CParcial';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseParcial } from 'typings';
import { apiSuccess, apiError } from 'utils';

const searchParcialById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseParcial>
) => {
  try {
    const { id_par } = req.query;

    const dataParcial = await searchParcialByIdOfDB(Number(id_par));

    if (!dataParcial)
      return res.status(404).json({ message: 'Material no encontrada' });

    return apiSuccess(res, dataParcial, 'searchParcialById');
  } catch (error) {
    return apiError(res, error, 'searchParcialById');
  }
};

export default searchParcialById;
