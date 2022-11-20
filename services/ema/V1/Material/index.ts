import axios from 'axios';
import { IMMaterial } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseMaterial } from 'typings';

export const MaterialService = {
  getAll: async (): Promise<ResponseMaterial> => {
    try {
      const ResMaterial = await axios.get(`${BASE_URL_API}/Material`);
      return axiosSuccess(ResMaterial, 'MaterialService.getAll');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.getAll');
    }
  },
  searchById: async (id: number): Promise<ResponseMaterial> => {
    try {
      const Material = await axios.get<IMMaterial[]>(
        `${BASE_URL_API}/Material/search/byId/${id}`
      );
      return axiosSuccess(Material, 'MaterialService.searchById');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.searchById');
    }
  },
  searchByURL: async (id: number): Promise<ResponseMaterial> => {
    try {
      const Material = await axios.get<IMMaterial[]>(
        `${BASE_URL_API}/Material/search/byURL/${id}`
      );
      return axiosSuccess(Material, 'MaterialService.');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.searchByURL');
    }
  },
  searchBySubtema: async (id_sub: number): Promise<ResponseMaterial> => {
    try {
      const Material = await axios.get<IMMaterial[]>(
        `${BASE_URL_API}/Material/search/bySubtema/${id_sub}`
      );
      return axiosSuccess(Material, 'MaterialService.searchById');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.searchById');
    }
  },

  create: async (Material: IMMaterial): Promise<ResponseMaterial> => {
    try {
      const ResMaterial = await axios.post(
        `${BASE_URL_API}/Material`,
        Material
      );
      return axiosSuccess(ResMaterial, 'MaterialService');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.');
    }
  },
  update: async (Material: IMMaterial): Promise<ResponseMaterial> => {
    try {
      const ResMaterial = await axios.put(`${BASE_URL_API}/Material`, Material);
      return axiosSuccess(ResMaterial, 'MaterialService');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.');
    }
  },
  delete: async (id: number): Promise<ResponseMaterial> => {
    try {
      const ResMaterial = await axios.delete(`${BASE_URL_API}/Material/${id}`);
      return axiosSuccess(ResMaterial, 'MaterialService');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.');
    }
  },
};
