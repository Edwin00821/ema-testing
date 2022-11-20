export type visualizarMaterial =
  | 'VISUALIZAR MATERIAL'
  | 'MOSTRAR MATERIAL'
  | 'MATERIAL'
  | 'CONSULTAR MATERIAL'
  | 'VER MATERIAL'
  | 'RECOMENDAR MATERIAL'
  | 'RECOMENDACIONES'
  | 'RECOMENDACION'
  | 'RECOMENDAR'
  | 'RECOMENDACIONES DE MATERIAL'
  | 'RECOMENDACION DE MATERIAL'
  | 'RECOMENDAR MATERIAL';

export type agregarMaterial = 'AGREGAR MATERIAL';

export type eliminarMaterial =
|'ELIMINAR MATERIAL'
|'BORRAR MATERIAL';

export type actualizarMaterial=
|'ACTUALIZAR MATERIAL'
|'EDITAR MATERIAL';

export type visualizarSemestre =
  | 'VISUALIZAR SEMESTRE'
  | 'MOSTRAR SEMESTRE'
  | 'SEMESTRE'
  | 'CONSULTAR SEMESTRE'
  | 'VER SEMESTRE'
  | 'SEMESTRES'
  | 'VISUALIZACIONES DE SEMESTRE'
  | 'MOSTRAR DE SEMESTRE'
  | 'CONSULTAR EL SEMESTRE';

export type agregarSemestre = 'AGREGAR SEMESTRE';

export type eliminarSemestre =
|'ELIMINAR SEMESTRE'
|'BORRAR SEMESTRE';

export type actualizarSemestre=
|'ACTUALIZAR SEMESTRE'
|'EDITAR SEMESTRE';


export interface OptionsChat {
  material: {
    visualizar: visualizarMaterial;
  };
}
