import { NextApiRequest, NextApiResponse } from 'next';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { postTemaOfDB } from 'database/Entities/CTema';

type Data = { message: string } | MCTema;

const postTema = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_tem, nombre_tem, id_par, id_ua, valida_tem }: ICTema = req.body;

    const dataTema = await postTemaOfDB({
      id_tem,
      nombre_tem,
      id_par,
      id_ua,
      valida_tem
    } as ICTema);

    return res.status(200).json({message: "Tema created"});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postTema;
