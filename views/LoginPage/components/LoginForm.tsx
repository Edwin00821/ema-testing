import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaLogin } from 'utils/schemas';

import type { ILogin } from 'interfaces/Auth';
import { AuthService } from 'services/ema/V1/auth';

import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Input } from 'components/Forms';

import { AppStore } from 'redux';
import { createStudent } from 'redux/states/student.state';

import { useRouter } from 'next/router';

const LoginForm = () => {
  const [showPass, setShowPass] = useState(true);
  const router = useRouter();
  const studentState = useSelector((store: AppStore) => store.student);
  const dispatch = useDispatch();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(SchemaLogin),
  });
  const onSubmit = async (data: ILogin) => {
    const { status, response } = (await AuthService.login(data)) as any;
    console.log(status, response);

    if (status === 404) {
      toast.error(response.message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    if (status === 200) {
      const { id_rol } = response.rol;

      if (id_rol === 1) {
        router.push('/admin');
      }
      if (id_rol === 2) {
        router.push('/student');
      }
    }
  };

  const onChange = () => {
    console.log('cambio algo');
  };

  const watchEmail = watch('correo_user');
  const watchPassword = watch('password_user');

  return (
    <form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Input
        type='text'
        value={watchEmail}
        placeholder='Correo electrónico'
        register={{ ...register('correo_user') }}
        errors={errors.correo_user}
        icon={
          <AiOutlineMail
            size={20}
            className='absolute top-3 right-4 text-gray-400'
          />
        }
      />

      <Input
        type={showPass ? 'password' : 'text'}
        value={watchPassword}
        placeholder='Password'
        register={{ ...register('password_user') }}
        errors={errors.password_user}
        icon={
          showPass ? (
            <AiOutlineEyeInvisible
              size={20}
              className='absolute top-3 right-4 cursor-pointer text-gray-400'
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <AiOutlineEye
              size={20}
              className='absolute top-4 right-3 cursor-pointer text-gray-400'
              onClick={() => setShowPass(!showPass)}
            />
          )
        }
      />
      <ReCAPTCHA
        sitekey='6LdugP0iAAAAAKYIT2PsY7xTPZ7h8qOj9iGN36fq'
        onChange={onChange}
      />
      <div className='mx-auto mb-8 flex w-full max-w-md items-center justify-between text-gray-500'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' {...register('remember')} />
          <label htmlFor='remember'>Recordarme</label>
        </div>
        <div>
          <a
            href='#'
            className=' hover:text-gray-900 hover:underline hover:decoration-secondary hover:decoration-wavy dark:hover:text-gray-100'
          >
            ¿Olvidaste tu password?
          </a>
        </div>
      </div>
      <div className='mx-auto w-full max-w-md '>
        <input
          type='submit'
          className='w-full cursor-pointer rounded-lg bg-secondary py-2 px-4 text-white transition-colors hover:bg-secondary-light'
          value='Iniciar sesión'
        />
      </div>
    </form>
  );
};
export default LoginForm;
