import axios from 'axios';
import { ICSubtema } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseSubtema } from 'typings';

export const SubtemaService = {
  getAll: async (): Promise<ResponseSubtema> => {
    try {
      const ResponseSub = await axios.get(`${BASE_URL_API}/Subtema`);
      return axiosSuccess(ResponseSub, 'SubtemaService.getAll');
    } catch (error: any) {
      return axiosError(error, 'SubtemaService.getAll');
    }
    // return axios
    //   .get(`${BASE_URL_API}/Subtema`)
    //   .then((ResponseSubtema) =>
    //     axiosSuccess(ResponseSubtema, 'SubtemaService.')
    //   )
    //   .catch((error: any) => axiosError(error, 'SubtemaService.'));
  },
  searchById: async (id: number): Promise<ResponseSubtema> => {
    try {
      const Subtema = await axios.get<ICSubtema[]>(
        `${BASE_URL_API}/Subtema/search/byId/${id}`
      );
      return axiosSuccess(Subtema, 'SubtemaService.searchById');
    } catch (error: any) {
      return axiosError(error, 'SubtemaService.searchById');
    }
  },
  searchByTema: async (id_tem: number): Promise<ResponseSubtema> => {
    try {
      const Subtema = await axios.get<ICSubtema[]>(
        `${BASE_URL_API}/Subtema/search/byTema/${id_tem}`
      );
      return axiosSuccess(Subtema, 'SubtemaService.searchById');
    } catch (error: any) {
      return axiosError(error, 'SubtemaService.searchById');
    }
  },

  create: async (Subtema: ICSubtema): Promise<ResponseSubtema> => {
    try {
      const ResponseSub = await axios.post(`${BASE_URL_API}/Subtema`, Subtema);
      return axiosSuccess(ResponseSub, 'SubtemaService.');
    } catch (error: any) {
      return axiosError(error, 'SubtemaService.');
    }
  },
  update: async (Subtema: ICSubtema): Promise<ResponseSubtema> => {
    try {
      const ResponseSub = await axios.put(`${BASE_URL_API}/Subtema`, Subtema);
      return axiosSuccess(ResponseSub, 'SubtemaService.');
    } catch (error: any) {
      return axiosError(error, 'SubtemaService.');
    }
  },
  delete: async (id: number): Promise<ResponseSubtema> => {
    try {
      const ResponseSub = await axios.delete(`${BASE_URL_API}/Subtema/${id}`);
      return axiosSuccess(ResponseSub, 'SubtemaService.');
    } catch (error: any) {
      return axiosError(error, 'SubtemaService.');
    }
  },
};
