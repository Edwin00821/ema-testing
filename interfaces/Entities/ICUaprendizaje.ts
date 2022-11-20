import IESemEsp from './IESemEsp';

interface ICUaprendizaje {
  id_ua: number | null;
  nombre_ua: string;
  id_semesp?: number;
  semesp: IESemEsp;
  valida_ua?: number | string;
}

export default ICUaprendizaje;
