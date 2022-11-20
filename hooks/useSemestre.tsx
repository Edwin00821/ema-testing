import { ICSemestre } from 'interfaces/Entities';
import { useState, useEffect } from 'react';
import type { selectData } from 'typings';

const defaultSemestre: selectData = {
  value: null,
  name: 'Escoge una semestre',
};

const useSemestre = (dataSemestre: ICSemestre[]) => {
  const [optionsSemestre, setOptionsSemestre] = useState<selectData[]>([]);
  const [selectedSemestre, setSelectedSemestre] =
    useState<selectData>(defaultSemestre);

  useEffect(() => {
    const options = dataSemestre.map(({ id_sem, tipo_sem }) => ({
      value: id_sem,
      name: tipo_sem,
    }));
    setOptionsSemestre(options);
  }, []);

  return {
    optionsSemestre,
    selectedSemestre,
    defaultSemestre,
    setSelectedSemestre,
  };
};

export default useSemestre;
