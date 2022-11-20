import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { IMPersona } from 'interfaces/Entities';
import { axiosError, axiosSuccess } from 'utils';
import { ResponsePersona } from 'typings';

export const PersonaService = {
  getAll: async (): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.get<ResponsePersona>(
        `${BASE_URL_API}/Persona`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.getAll');
    }
  },
  searchById: async (id: number): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.get<IMPersona[]>(
        `${BASE_URL_API}/Persona/search/byId/${id}`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.searchById');
    }
  },
  searchByAppatAndApmat: async (
    appat: string,
    apmat: string
  ): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.get<IMPersona[]>(
        `${BASE_URL_API}/Persona/search/byAppatAndApmat/${appat}/${apmat}`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.searchByAppatAndApmat');
    }
  },
  create: async (Persona: IMPersona): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.post(
        `${BASE_URL_API}/Persona`,
        Persona
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.create');
    }
  },
  update: async (Persona: IMPersona): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.put(
        `${BASE_URL_API}/Persona`,
        Persona
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.update');
    }
  },
  delete: async (id: number): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.delete(
        `${BASE_URL_API}/Persona/${id}`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.delete');
    }
  },
};
