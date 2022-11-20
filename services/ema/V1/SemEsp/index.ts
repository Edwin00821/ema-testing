import axios from 'axios';
import { IESemEsp } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseSemEsp } from 'typings';

export const SemEspService = {
  getAll: async (): Promise<ResponseSemEsp> => {
    try {
      const ResponseSE = await axios.get<ResponseSemEsp>(
        `${BASE_URL_API}/SemEsp`
      );
      return axiosSuccess(ResponseSE, 'SemEspService.');
    } catch (error: any) {
      return axiosError(error, 'SemEspService.getAll');
    }
  },
  searchById: async (id: number) => {
    try {
      const ResponseSE = await axios.get<ResponseSemEsp>(
        `${BASE_URL_API}/SemEsp/${id}`
      );
      return axiosSuccess(ResponseSE, 'SemEspService.');
    } catch (error: any) {
      return axiosError(error, 'SemEspService.searchById');
    }
  },
  searchBySemAndEsp: async (
    id_sem: number,
    id_es: number
  ): Promise<ResponseSemEsp> => {
    try {
      const ResponseSE = await axios.get<ResponseSemEsp>(
        `${BASE_URL_API}/SemEsp/search/bySemAndEsp/${id_sem}/${id_es}`
      );
      return axiosSuccess(ResponseSE, 'SemEspService.');
    } catch (error: any) {
      return axiosError(error, 'SemEspService.searchBySemEsp');
    }
  },
  create: async (SemEsp: IESemEsp): Promise<ResponseSemEsp> => {
    try {
      const ResponseSE = await axios.post(`${BASE_URL_API}/SemEsp`, SemEsp);
      return axiosSuccess(ResponseSE, 'SemEspService.');
    } catch (error: any) {
      return axiosError(error, 'SemEspService.create');
    }
  },
  update: async (SemEsp: IESemEsp): Promise<ResponseSemEsp> => {
    try {
      const ResponseSE = await axios.put(`${BASE_URL_API}/SemEsp`, SemEsp);
      return axiosSuccess(ResponseSE, 'SemEspService.');
    } catch (error: any) {
      return axiosError(error, 'SemEspService.update');
    }
  },
  delete: async (id: number): Promise<ResponseSemEsp> => {
    try {
      const ResponseSE = await axios.delete(`${BASE_URL_API}/SemEsp/${id}`);
      return axiosSuccess(ResponseSE, 'SemEspService.');
    } catch (error: any) {
      return axiosError(error, 'SemEspService.delete');
    }
  },
};
