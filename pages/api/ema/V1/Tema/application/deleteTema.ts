import { NextApiRequest, NextApiResponse } from 'next';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { deleteTemaOfDB } from 'database/Entities/CTema';

type Data = { message: string } | MCTema;

const deleteTema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_tem, nombre_tem, id_par, id_ua, valida_tem }: ICTema = req.body;

    const dataTema = await deleteTemaOfDB({
      id_tem,
      nombre_tem,
      id_par,
      id_ua,
      valida_tem,
    } as ICTema);

    if (!dataTema) return res.status(404).json({ message: 'Tema not found' });

    return res.status(200).json({ message: 'Delete Tema' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteTema;
