import axios from 'axios';
import { ICRol } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseRol } from 'typings';

export const RolService = {
  getAll: async (): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.get(`${BASE_URL_API}Rol`);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  getOne: async (id: number): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.get(`${BASE_URL_API}Rol/${id}`);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  create: async (Rol: ICRol): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.post(`${BASE_URL_API}Rol`, Rol);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  update: async (Rol: ICRol): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.put(`${BASE_URL_API}Rol`, Rol);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  delete: async (id: number): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.delete(`${BASE_URL_API}Rol/${id}`);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
};
