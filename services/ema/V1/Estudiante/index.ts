import axios from 'axios';
import { IMPersona } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosError, axiosSuccess } from 'utils';
import { ResponseEstudiante } from 'typings';

export const EstudianteService = {
  searchByBoleta: async (boleta: string): Promise<ResponseEstudiante> => {
    try {
      const ResponseEstudiante = await axios.get<ResponseEstudiante>(
        `${BASE_URL_API}/Estudiante/search/byBoleta/${boleta}`
      );
      return axiosSuccess(ResponseEstudiante, 'EstudianteService');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.searchByBoleta');
    }
  },
  searchByEmail: async (email: string): Promise<ResponseEstudiante> => {
    try {
      const ResponseEstudiante = await axios.get<ResponseEstudiante>(
        `${BASE_URL_API}/Estudiante/search/byEmail/${email}`
      );
      return axiosSuccess(ResponseEstudiante, 'EstudianteService');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.searchByEmail');
    }
  },
};
