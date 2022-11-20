import { ICUaprendizaje } from "interfaces/Entities";
export const AdapterUaprendizaje = (
  uaprendizaje: ICUaprendizaje
): ICUaprendizaje => {
  return {
    id_ua: uaprendizaje.id_ua,
    nombre_ua: uaprendizaje.nombre_ua,
    semesp: uaprendizaje.semesp,
    valida_ua: uaprendizaje.valida_ua,
  };
};
