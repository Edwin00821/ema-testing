import { ICEspecialidad, ICSemestre } from 'interfaces/Entities';
import type IDUser from './IDUser';

interface IMEstudiante {
  isLogued?: boolean;
  boleta_est: string | null;
  correo_user?: string | null;
  user?: IDUser;
  id_es?: number | null;
  especialidad?: ICEspecialidad;
  id_sem?: number | null;
  semestre?: ICSemestre;
  valida_est?: number | string;
}

export default IMEstudiante;
