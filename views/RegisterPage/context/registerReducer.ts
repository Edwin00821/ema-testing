import { ContextPropsRegister } from './';
import { ICGenero, ICSemestre, ICEspecialidad } from 'interfaces/Entities';
import { IPersonalData, IRegisterStudent } from 'interfaces/Auth';

type RegisterActionType =
  | { type: 'SET_DATA_GENERO'; payload: ICGenero[] }
  | { type: 'SET_DATA_SEMESTRE'; payload: ICSemestre[] }
  | { type: 'SET_DATA_ESPECIALIDAD'; payload: ICEspecialidad[] }
  | { type: 'SET_PERSONAL_DATA'; payload: IPersonalData }
  | { type: 'SET_ACADEMIC_DATA'; payload: IRegisterStudent }
  | { type: 'SET_INDEX_ACTIVE'; payload: number };

export const registerReducer = (
  state: ContextPropsRegister,
  action: RegisterActionType
) => {
  switch (action.type) {
    case 'SET_DATA_GENERO':
      return {
        ...state,
        dataGenero: action.payload,
      };
    case 'SET_DATA_SEMESTRE':
      return {
        ...state,
        dataSemestre: action.payload,
      };
    case 'SET_DATA_ESPECIALIDAD':
      return {
        ...state,
        dataEspecialidad: action.payload,
      };
    case 'SET_PERSONAL_DATA':
      return {
        ...state,
        personalData: action.payload,
      };
    case 'SET_ACADEMIC_DATA':
      return {
        ...state,
        academicData: action.payload,
      };
    case 'SET_INDEX_ACTIVE':
      return {
        ...state,
        indexActive: action.payload,
      };
    default:
      return state;
  }
};
