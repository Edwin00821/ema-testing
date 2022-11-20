import { NextApiRequest, NextApiResponse } from 'next';
import { MCGenero } from 'models';
import { ICGenero } from 'interfaces/Entities';
import { deleteGeneroOfDB } from 'database/Entities/CGenero';

type Data = { message: string } | MCGenero;

const deleteGenero = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_gen, tipo_gen, valida_gen }: ICGenero = req.body;

    const dataGenero = await deleteGeneroOfDB({
      id_gen,
      tipo_gen,
      valida_gen,
    });
    console.log({ dataGenero });

    if (!dataGenero)
      return res.status(404).json({ message: 'Genero not found' });

    return res.status(200).json({ message: 'Delete genero' });
  } catch (error) {
    return res.status(500).json({ message: 'genernal server error' });
  }
};

export default deleteGenero;
