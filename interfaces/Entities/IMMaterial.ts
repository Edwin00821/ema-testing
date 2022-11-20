import ICSubtema from './ICSubtema';

interface IMMaterial {
  id_mat: number | null;
  url_mat: string;
  id_sub?: number | null;
  subtema?: ICSubtema;
  valida_mat: number | string;
}

export default IMMaterial;
