import ICEspecialidad from './ICEspecialidad';
import ICSemestre from './ICSemestre';

interface IESemEsp {
  id_semesp: number | null;
  id_es?: number | null;
  especialidad: ICEspecialidad;
  id_sem?: number | null;
  semestre: ICSemestre;
  valida_semesp?: number | string;
}

export default IESemEsp;
