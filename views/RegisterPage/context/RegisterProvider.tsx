import { FC, useReducer } from 'react';
import { registerReducer } from './';
import { ICGenero, ICSemestre, ICEspecialidad } from 'interfaces/Entities';
import { IPersonalData, IRegisterStudent } from 'interfaces/Auth';

export const initialState = {
  dataGenero: [{ id_gen: 0, tipo_gen: 'No se encontraron generos' }],
  dataSemestre: [{ id_sem: 0, tipo_sem: 'No se encontraron semestres' }],
  dataEspecialidad: [{ id_es: 0, nombre_es: 'No se encontraron especialidades' }],
  personalData: null,
  academicData: null,
  indexActive: 1,
  setGenero: (_genero: ICGenero[]) => {},
  setSemestre: (_semestre: ICSemestre[]) => {},
  setEspecialidad: (_especialidad: ICEspecialidad[]) => {},
  setPersonalData: (_personalData: IPersonalData) => {},
  setAcademicData: (_academicData: IRegisterStudent) => {},
  setIndexActive: (_index: number) => {},
};

interface Props {
  children: React.ReactNode;
}

export const RegisterProvider = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const setGenero = (genero: ICGenero[]) => {
    dispatch({ type: 'SET_DATA_GENERO', payload: genero });
  };

  const setSemestre = (semestre: ICSemestre[]) => {
    dispatch({ type: 'SET_DATA_SEMESTRE', payload: semestre });
  };

  const setEspecialidad = (especialidad: ICEspecialidad[]) => {
    dispatch({ type: 'SET_DATA_ESPECIALIDAD', payload: especialidad });
  };

  const setPersonalData = (personalData: IPersonalData) => {
    dispatch({ type: 'SET_PERSONAL_DATA', payload: personalData });
  };

  const setAcademicData = (academicData: IRegisterStudent) => {
    dispatch({ type: 'SET_ACADEMIC_DATA', payload: academicData });
  };

  const setIndexActive = (index: number) => {
    dispatch({ type: 'SET_INDEX_ACTIVE', payload: index });
  };

  return {
    ...state,
    setGenero,
    setSemestre,
    setEspecialidad,
    setPersonalData,
    setAcademicData,
    setIndexActive,
  };

  // return (
  //   <RegisterContext.Provider
  //     value={{ ...initialState, addGenero, addSemestre, addEspecialidad }}
  //   >
  //     {children}
  //   </RegisterContext.Provider>
  // );
};
