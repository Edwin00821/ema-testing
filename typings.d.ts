import {
  ICEspecialidad,
  ICGenero,
  ICInteligencia,
  ICParcial,
  ICRol,
  ICSemestre,
  ICSubtema,
  ICTema,
  ICUaprendizaje,
  IDUser,
  IESemEsp,
  IMAdmin,
  IMEstudiante,
  IMMaterial,
  IMPersona,
} from 'interfaces/Entities';

export interface selectData {
  name: string | null;
  value: number | null;
}

export interface Navs {
  name: string;
  href: string;
  active: boolean;
}
export type AuthStudent = IRegisterStudent extends IPersonalData
  ? IRegisterStudent
  : never;

export type Response = { message?: string; data?: any };

export interface ResponseAuthStudent extends Response {
  data?: ICRol[];
}
export interface ResponsePersona extends Response {
  data?: IMPersona[];
}
export interface ResponseEstudiante extends Response {
  data?: IMEstudiante[];
}
export interface ResponseAdmin extends Response {
  data?: IMAdmin[];
}
export interface ResponseMaterial extends Response {
  data?: IMMaterial[];
}
export interface ResponseUser extends Response {
  data?: IDUser[];
}
export interface ResponseRol extends Response {
  data?: ICRol[];
}
export interface ResponseGenero extends Response {
  data?: ICGenero[];
}
export interface ResponseInteligencia extends Response {
  data?: ICInteligencia[];
}
export interface ResponseUaprendizaje extends Response {
  data?: ICUaprendizaje[];
}
export interface ResponseParcial extends Response {
  data?: ICParcial[];
}
export interface ResponseSemestre extends Response {
  data?: ICSemestre[];
}
export interface ResponseEspecialidad extends Response {
  data?: ICEspecialidad[];
}
export interface ResponseSemEsp extends Response {
  data?: IESemEsp[];
}
export interface ResponseTema extends Response {
  data?: ICTema[];
}
export interface ResponseSubtema extends Response {
  data?: ICSubtema[];
}

// export type ApiResponsePersona = IMPersona[] | Message;
// export type ApiResponseEstudiante = IMEstudiante[] | Message;
// export type ApiResponseAdmin = IMAdmin[] | Message;
// export type ApiResponseMaterial = IMMaterial[] | Message;
// export type ApiResponseUser = IDUser[] | Message;
// export type ApiResponseRol = ICRol[] | Message;
// export type ApiResponseGenero = ICGenero[] | Message;
// export type ApiResponseInteligencia = ICInteligencia[] | Message;
// export type ApiResponseUaprendizaje = ICUaprendizaje[] | Message;
// export type ApiResponseParcial = ICParcial[] | Message;
// export type ApiResponseSemestre = ICSemestre[] | Message;
// export type ApiResponseEspecialidad = ICEspecialidad[] | Message;
// export type ApiResponseSemEsp = IESemEsp[] | Message;
// export type ApiResponseTema = ICTema[] | Message;
// export type ApiResponseSubtema = ICSubtema[] | Message;
