import { NextApiRequest, NextApiResponse } from 'next';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { postSemEspOfDB } from 'database/Entities/ESemEsp';

type Data = { message: string } | MESemEsp;

const postSemEsp = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body;

    const dataSemEsp = await postSemEspOfDB({
        id_semesp,
        id_sem,
        id_es,
        valida_semesp
    } as IESemEsp);

    return res.status(200).json({message: "SemEsp created"});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postSemEsp;
