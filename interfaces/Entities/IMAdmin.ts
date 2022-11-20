import type { IDUser } from 'interfaces/Entities';

interface IMAdmin {
  isLogued?: boolean;
  num_empleado: string | null;
  correo_user?: string | null;
  user?: IDUser;
  valida_adm?: number | string;
}

export default IMAdmin;
