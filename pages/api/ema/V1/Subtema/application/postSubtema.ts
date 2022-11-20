import { NextApiRequest, NextApiResponse } from 'next';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';
import { postSubtemaOfDB } from 'database/Entities/CSubtema';

type Data = { message: string } | MCSubtema;

const postSubtema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const {
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub,
    }: ICSubtema = req.body;

    const dataSubtema = await postSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem ,
      valida_sub,
    } as ICSubtema);

    return res.status(200).json({ message: 'Created Subtema' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postSubtema;
