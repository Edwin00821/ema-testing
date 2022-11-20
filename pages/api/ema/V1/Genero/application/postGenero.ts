import { NextApiRequest, NextApiResponse } from 'next';
import { MCGenero } from 'models';
import { ICGenero } from 'interfaces/Entities';
import { postGeneroOfDB } from 'database/Entities/CGenero';

type Data = { message: string; dataGenero?: any };

const postGenero = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_gen, tipo_gen, valida_gen }: ICGenero = req.body;

    await postGeneroOfDB({
      id_gen,
      tipo_gen,
      valida_gen,
    } as ICGenero);

    return res.status(200).json({ message: 'Genero created' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Genernal server error' });
  }
};

export default postGenero;
