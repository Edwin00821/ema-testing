import axios from 'axios';
import { ICUaprendizaje } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseUaprendizaje } from 'typings';

export const UAprendizajeService = {
  getAll: async (): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.get(`${BASE_URL_API}/UAprendizaje`);
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.getAll');
    }
  },
  searchById: async (id: number) => {
    try {
      const UA = await axios.get<ICUaprendizaje[]>(
        `${BASE_URL_API}/UAprendizaje/search/byId/${id}`
      );
      return axiosSuccess(UA, 'UAprendizajeService.searchById');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.searchById');
    }
  },
  searchBySemEsp: async (id_semesp: number): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.get<ICUaprendizaje[]>(
        `${BASE_URL_API}/UAprendizaje/search/bySemEsp/${id_semesp}`
      );
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.searchBySemEsp');
    }
  },
  create: async (
    UAprendizaje: ICUaprendizaje
  ): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.post(`${BASE_URL_API}/UAprendizaje`, UAprendizaje);
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.create');
    }
  },
  update: async (
    UAprendizaje: ICUaprendizaje
  ): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.put(`${BASE_URL_API}/UAprendizaje`, UAprendizaje);
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.update');
    }
  },
  delete: async (id: number): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.delete(`${BASE_URL_API}/UAprendizaje/${id}`);
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.delete');
    }
  },
};
