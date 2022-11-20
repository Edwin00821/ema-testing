import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { ICParcial } from 'interfaces/Entities';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseParcial } from 'typings';

export const ParcialService = {
  getAll: async (): Promise<ResponseParcial> => {
    try {
      const ResponseParcial = await axios.get<ResponseParcial>(
        `${BASE_URL_API}/Parcial`
      );
      return axiosSuccess(ResponseParcial, 'ParcialService.getAll');
    } catch (error: any) {
      return axiosError(error, 'ParcialService.getAll');
    }
  },
  getOneById: async (id: number): Promise<ResponseParcial> => {
    try {
      const ResponseParcial = await axios.get<ICParcial[]>(
        `${BASE_URL_API}/Parcial/${id}`
      );
      return axiosSuccess(ResponseParcial, 'ParcialService.');
    } catch (error: any) {
      return axiosError(error, 'ParcialService');
    }
  },
  searchById: async (id: number): Promise<ResponseParcial> => {
    try {
      const Parcial = await axios.get<ICParcial[]>(
        `${BASE_URL_API}/Parcial/search/byId/${id}`
      );
      return axiosSuccess(Parcial, 'ParcialService.searchById');
    } catch (error: any) {
      return axiosError(error, 'ParcialService.searchById');
    }
  },
  create: async (Parcial: ICParcial): Promise<ResponseParcial> => {
    try {
      const ResponseParcial = await axios.post(
        `${BASE_URL_API}/Parcial, Parcial`
      );
      return axiosSuccess(ResponseParcial, 'ParcialService.');
    } catch (error: any) {
      return axiosError(error, 'ParcialService.');
    }
  },
  update: async (Parcial: ICParcial): Promise<ResponseParcial> => {
    try {
      const ResponseParcial = await axios.put(
        `${BASE_URL_API}/Parcial, Parcial`
      );
      return axiosSuccess(ResponseParcial, 'ParcialService.');
    } catch (error: any) {
      return axiosError(error, 'ParcialService.');
    }
  },
  delete: async (id: number): Promise<ResponseParcial> => {
    try {
      const ResponseParcial = await axios.delete(
        `${BASE_URL_API}/Parcial/${id}`
      );
      return axiosSuccess(ResponseParcial, 'ParcialService.');
    } catch (error: any) {
      return axiosError(error, 'ParcialService.');
    }
  },
};
