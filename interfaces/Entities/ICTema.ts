import ICParcial from './ICParcial';
import ICUaprendizaje from './ICUaprendizaje';

interface ICTema{
  id_tem: number | null;
  nombre_tem: string;
  id_par?: number | null;
  parcial?: ICParcial;
  id_ua?: number | null;
  unidad_aprendizaje?: ICUaprendizaje;
  valida_tem: number | string;
}

export default ICTema;
