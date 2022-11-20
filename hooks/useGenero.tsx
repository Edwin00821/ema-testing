import { useState, useEffect } from 'react';
import { ICGenero } from 'interfaces/Entities';
import type { selectData } from 'typings';

const DefaultGenero: selectData = {
  value: null,
  name: 'Escoge una genero',
};

const useGenero = (dataGenero: ICGenero[]) => {
  const [optionsGenero, setOptionsGenero] = useState([]);

  const [selectedGenero, setSelectedGenero] =
    useState<selectData>(DefaultGenero);

  useEffect(() => {
    const options = dataGenero.map(({ id_gen, tipo_gen }: ICGenero) => ({
      value: id_gen,
      name: tipo_gen,
    }));
    setOptionsGenero(options);
  }, []);

  return { optionsGenero, selectedGenero, setSelectedGenero };
};

export default useGenero;
