import { NextApiRequest, NextApiResponse } from 'next';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { deleteSemestreOfDB } from 'database/Entities/CSemestre';

type Data = { message: string } | MCSemestre;

const deleteSemestre = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: ICSemestre = req.body;

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
