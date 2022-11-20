import type { ICGenero, ICInteligencia } from 'interfaces/Entities';

interface IMPersona {
  id_per: number | null;
  nombre_per: string;
  appat_per: string;
  apmat_per: string;
  fecha_de_nacimiento_per: Date | string;
  id_gen?: number | null;
  genero?: ICGenero;
  id_int?: number | null;
  inteligencia?: ICInteligencia;
  valida_per?: number | string;
}

export default IMPersona;
