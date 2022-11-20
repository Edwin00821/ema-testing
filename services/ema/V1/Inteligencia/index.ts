import axios from 'axios';
import { ICInteligencia } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseInteligencia } from 'typings';

export const InteligenciaService = {
  getAll: async (): Promise<ResponseInteligencia> => {
    try {
      const ResInteligencia = await axios.get(`${BASE_URL_API}Inteligencia`);
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
  searchById: async (id: number): Promise<ResponseInteligencia> => {
    try {
      const Inteligencia = await axios.get<ICInteligencia[]>(
        `${BASE_URL_API}/Inteligencia/search/byId/${id}`
      );
      return axiosSuccess(Inteligencia, 'InteligenciaService.');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.searchById');
    }
  },
  create: async (
    Inteligencia: ICInteligencia
  ): Promise<ResponseInteligencia> => {
    try {
      const ResInteligencia = await axios.post(
        `${BASE_URL_API}Inteligencia`,
        Inteligencia
      );
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
  update: async (
    Inteligencia: ICInteligencia
  ): Promise<ResponseInteligencia> => {
    try {
      const ResInteligencia = await axios.put(
        `${BASE_URL_API}Inteligencia`,
        Inteligencia
      );
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
  delete: async (id: number): Promise<ResponseInteligencia> => {
    try {
      const ResInteligencia = await axios.delete(
        `${BASE_URL_API}Inteligencia/${id}`
      );
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
};
