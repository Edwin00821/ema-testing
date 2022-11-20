import { NextApiRequest, NextApiResponse } from 'next';
import { getAllParcialesOfDB } from 'database/Entities/CParcial';
import { ResponseParcial } from 'typings';
import { apiSuccess, apiError } from 'utils';

const getAllParciales = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseParcial>
) => {
  try {
    const dataParcial = await getAllParcialesOfDB();
    return apiSuccess(res, dataParcial, 'getAllParciales');
  } catch (error) {
    return apiError(res, error, 'getAllParciales');
  }
};

export default getAllParciales;
