import axios from 'axios';
import { ICEspecialidad } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosError, axiosSuccess } from 'utils';
import { ResponseEspecialidad } from 'typings';

export const EspecialidadService = {
  getAll: async (): Promise<ResponseEspecialidad> => {
    try {
      const ResponseEsp = await axios.get<ResponseEspecialidad>(
        `${BASE_URL_API}/Especialidad`
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.getAll');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.getAll');
    }
  },
  getOneById: async (id: number): Promise<ResponseEspecialidad> => {
    try {
      const ResponseEsp = await axios.get<ResponseEspecialidad>(
        `${BASE_URL_API}/Especialidad/${id}`
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
  searchById: async (id: number): Promise<ResponseEspecialidad> => {
    try {
      const Especialidad = await axios.get<ICEspecialidad[]>(
        `${BASE_URL_API}/Especialidad/search/byId/${id}`
      );
      return axiosSuccess(Especialidad, 'EspecialidadService.searchById');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.searchById');
    }
  },
  create: async (
    Especialidad: ICEspecialidad
  ): Promise<ResponseEspecialidad> => {
    try {
      const ResponseEsp = await axios.post(
        `${BASE_URL_API}/Especialidad, Especialidad`
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
  update: async (
    Especialidad: ICEspecialidad
  ): Promise<ResponseEspecialidad> => {
    try {
      const ResponseEsp = await axios.put(
        `${BASE_URL_API}/Especialidad, Especialidad`
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
  delete: async (id: number): Promise<ResponseEspecialidad> => {
    try {
      const ResponseEsp = await axios.delete(
        `${BASE_URL_API}/Especialidad/${id}`
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
};
