import { NextApiRequest, NextApiResponse } from 'next';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { deleteSemEspOfDB } from 'database/Entities/ESemEsp';

type Data = { message: string } | MESemEsp;

const deleteSemestre = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: IESemEsp = req.body;

    const dataSemestre = await deleteSemestreOfDB({
      id_sem,
      tipo_sem,
      valida_sem,
    });

    if (!dataSemestre)
      return res.status(404).json({ message: 'Semestre not found' });

    return res.status(200).json({ message: 'Semestre dado de baja' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteSemestre;
