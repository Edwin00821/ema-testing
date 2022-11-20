import { useState, useEffect } from 'react';
import { ICEspecialidad } from 'interfaces/Entities';
import type { selectData } from 'typings';

const defaultEspecialidad: selectData = {
  value: null,
  name: 'Escoge una especialidad',
};

const useEspecialidad = (dataEspecialidad: ICEspecialidad[]) => {
  const [optionsEspecialidad, setOptionsEspecialidad] = useState<selectData[]>(
    []
  );

  const [selectedEspecialidad, setSelectedEspecialidad] =
    useState<selectData>(defaultEspecialidad);

  useEffect(() => {
    const options = dataEspecialidad.map(({ id_es, nombre_es }) => ({
      value: id_es,
      name: nombre_es,
    }));
    setOptionsEspecialidad(options);
  }, []);

  return {
    optionsEspecialidad,
    selectedEspecialidad,
    defaultEspecialidad,
    setSelectedEspecialidad,
  };
};

export default useEspecialidad;
