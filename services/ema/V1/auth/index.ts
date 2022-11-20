import { ICRol } from 'interfaces/Entities';
import axios from 'axios';
import { axiosError } from 'utils/errors';
import { ILogin } from 'interfaces/Auth';
import { AuthStudent, ResponseAuthStudent } from 'typings';

interface ILoginResponse {
  message: string;
  rol?: ICRol;
}
export const AuthService = {
  login: async (Auth: ILogin): Promise<any> => {
    try {
      const { correo_user, password_user, remember } = Auth;
      const { data, status } = await axios.post<any>(
        '/api/auth/login',
        {
          correo: correo_user,
          password: password_user,
          remember,
        }
      );
      console.log(
        '--------------------------------------Axios Login request--------------------------------------'
      );

      return { status, response: data };
    } catch (error) {
      return axiosError(error, 'AuthService.login');
    }
  },
  registerStudent: async (
    Auth: AuthStudent
  ): Promise<ResponseAuthStudent> => {
    console.log({ Auth });
    console.log(
      '--------------------------------------Axios registerStudent request--------------------------------------'
    );
    try {
      const { data } = await axios.post<Message>(`api/Auth/student`, Auth);
      console.log('Data from axios', data);

      return { status: 200, response: data };
    } catch (error) {
      return axiosError(error, 'registerStudent');
    }
  },
  registerAdmin: async (Auth: any) => {
    const { data } = await axios.post(`api/Auth/admin`, Auth);
    return data;
  },
};
