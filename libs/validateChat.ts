import { visualizarMaterial } from 'libs/obtionsChat';
export const valideteMaterial = (message: string) => {
  const material = message.trim().toUpperCase() as visualizarMaterial;
  return (
    material === 'VISUALIZAR MATERIAL' ||
    material === 'MOSTRAR MATERIAL' ||
    material === 'CONSULTAR MATERIAL' ||
    material === 'VER MATERIAL' ||
    material === 'RECOMENDAR MATERIAL' ||
    material === 'RECOMENDACION DE MATERIAL'
  );
};

