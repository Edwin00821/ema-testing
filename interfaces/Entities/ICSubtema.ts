import ICTema from './ICTema';

interface ICSubtema {
  id_sub: number | null;
  nombre_sub: string;
  id_tem?: number | null;
  tema?: ICTema;
  valida_sub: number | string;
}

export default ICSubtema;
