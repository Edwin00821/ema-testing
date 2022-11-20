import { NextApiRequest, NextApiResponse } from 'next';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';
import { deleteSubtemaOfDB } from 'database/Entities/CSubtema';

type Data = { message: string } | MCSubtema;

const deleteSubtema = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sub, nombre_sub, id_tem, valida_sub }: ICSubtema = req.body;

    const dataSubtema = await deleteSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub,
    } as ICSubtema);

    if (!dataSubtema)
      return res.status(404).json({ message: 'Subtema not found' });

    return res.status(200).json({ message: 'Delete Subtema' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteSubtema;
