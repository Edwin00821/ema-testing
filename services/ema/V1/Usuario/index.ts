import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { IDUser } from 'interfaces/Entities';
import { axiosSuccess, axiosError } from 'utils';
import { AxiosResponseUser } from 'typings';

export const UsuarioService = {
  searchByEmail: async (email: string): Promise<AxiosResponseUser> => {
    try {
      const ResponseUsuario = await axios.get<IDUser[]>(
        `${BASE_URL_API}/User/search/byEmail/${email}`
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.searchById');
    }
  },
  searchByRol: async (rol: string): Promise<AxiosResponseUser> => {
    try {
      const ResponseUsuario = await axios.get<IDUser[]>(
        `${BASE_URL_API}/User/search/byRol/${rol}`
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.searchById');
    }
  },
};
