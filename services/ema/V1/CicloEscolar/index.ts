import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';

export const CicloEscolarService = {
  getAll: async () => {
    const { data } = await axios.get(`${BASE_URL_API}CicloEscolar`);
    return data;
  },
  getOne: async (id: number) => {
    const { data } = await axios.get(`${BASE_URL_API}CicloEscolar/${id}`);
    return data;
  },
  create: async (CicloEscolar: any) => {
    const { data } = await axios.post(`${BASE_URL_API}CicloEscolar`, CicloEscolar);
    return data;
  },
  update: async (CicloEscolar: any) => {
    const { data } = await axios.put(`${BASE_URL_API}CicloEscolar`, CicloEscolar);
    return data;
  },
  delete: async (id: number) => {
    const { data } = await axios.delete(`${BASE_URL_API}CicloEscolar/${id}`);
    return data;
  },
};
