import { NextApiRequest, NextApiResponse } from 'next';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { putSemEspOfDB } from 'database/Entities/ESemEsp';

type Data = { message: string } | MESemEsp;

const putSemEsp = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body;

    const dataSemEsp = await putSemEspOfDB({
      id_semesp,
      id_sem,
      id_es,
      valida_semesp,
    });

    if (!dataSemEsp)
      return res.status(404).json({ message: 'SemEsp not found' });

    return res.status(200).json({ message: 'SemEsp updated' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default putSemEsp;
