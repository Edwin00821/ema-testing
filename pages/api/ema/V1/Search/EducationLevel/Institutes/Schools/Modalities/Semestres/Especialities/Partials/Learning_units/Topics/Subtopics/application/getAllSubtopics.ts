import { NextApiRequest, NextApiResponse } from 'next';
// import {MCSubtopic} from 'models';
// import { getAllSubtopics } from 'database/Entities/CSubtema';
// import { DataSubtopic } from 'typings';

const getPersonas = async (
  _req: NextApiRequest,
  // res: NextApiResponse<Data> | NextApiResponse<Data[]>
  res: NextApiResponse
) => {
  try {
    // const RowsDataMPersona = await getAllSubtopics();
    
    // res.status(200).json(RowsDataMPersona);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};
export default getPersonas;
