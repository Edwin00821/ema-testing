import { NextApiRequest, NextApiResponse } from 'next';
import { MMPersona } from 'models';
import { IMPersona } from 'interfaces/Entities';
import { deletePersonaOfDB } from 'database/Entities/MPersona';

type Data = { message: string } | MMPersona;

const deletePersona = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const {
        id_per,
        nombre_per,
        appat_per,
        apmat_per,
        fecha_de_nacimiento_per,
        id_gen,
        id_int,
        valida_per
    }: IMPersona = req.body;

    const dataPersona = await deletePersonaOfDB({
        id_per,
        nombre_per,
        appat_per,
        apmat_per,
        fecha_de_nacimiento_per,
        id_gen,
        id_int,
        valida_per
    } as IMPersona);

    if (!dataPersona)
    return res.status(404).json({ message: 'Persona not found' });

    return res.status(200).json({ message: 'Delete Persona' });

  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default deletePersona;
