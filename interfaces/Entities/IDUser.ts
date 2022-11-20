import type { IMPersona, ICRol } from 'interfaces/Entities';

interface IDUser {
  correo_user: string;
  password_user?: string;
  id_rol?: number | null | undefined;
  rol?: ICRol | null | undefined;
  id_per?: number | null | undefined;
  persona?: IMPersona | null | undefined;
  valida_user?: number | string;
}

export default IDUser;
