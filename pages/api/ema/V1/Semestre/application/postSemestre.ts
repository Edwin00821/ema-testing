import { NextApiRequest, NextApiResponse } from 'next';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { postSemestreOfDB } from 'database/Entities/CSemestre';

type Data = { message: string } | MCSemestre;

const postSemestre = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: ICSemestre = req.body;

    const dataSemestre = await postSemestreOfDB({
      id_sem,
      tipo_sem,
      valida_sem
    } as ICSemestre);

    return res.status(200).json({message: "Semestre created"});
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default postSemestre;
