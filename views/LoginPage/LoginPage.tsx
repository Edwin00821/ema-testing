import Link from 'next/link';

import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import { TfiMicrosoftAlt } from 'react-icons/tfi';

import { LoginForm, Authenticators } from './components';

const LoginPage = () => {
  return (
    <div className='bg-primary-light dark:bg-tertiary '>
      <div className='grid min-h-screen grid-cols-1 items-center lg:grid-cols-2'>
        <div className='flex flex-col rounded-tl-lg rounded-bl-lg   p-4'>
          <div className='flex flex-col items-center justify-center rounded-tl-lg rounded-bl-lg p-4'>
            <div className='flex flex-col items-center gap-8'>
              <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
                Bienvenido
              </h1>
              <p className='text-center text-gray-500'>
                Para continuar, inicia sesión en tu cuenta
              </p>
              <div className='flex gap-3'>
                <Authenticators
                  href='/'
                  icon={<AiOutlineGoogle />}
                  name={'Google'}
                />
                <Authenticators
                  href='/'
                  icon={<TfiMicrosoftAlt />}
                  name={'Microsoft'}
                />
                <Authenticators
                  href='/'
                  icon={<AiOutlineGithub />}
                  name={'Github'}
                />
              </div>
            </div>
            <div className='my-8'>
              <p className='relative text-center text-gray-500 before:absolute before:-left-[60px] before:top-[50%] before:h-[1px] before:w-full before:max-w-[50px] before:bg-current after:absolute after:top-[50%] after:-right-[60px] after:h-[1px] after:w-full after:max-w-[50px] after:bg-current md:before:-left-[140px] md:before:max-w-[120px] md:after:-right-[140px] md:after:max-w-[120px]'>
                Ingresa con tu email
              </p>
            </div>
            <div className='mb-8 w-full sm:w-2/3'>
              <LoginForm />
            </div>
            <div>
              <span className='text-gray-500'>
                ¿No tienes cuenta?{' '}
                <Link href='/register'>
                  <a className='text-gray-900 hover:underline hover:decoration-secondary hover:decoration-wavy dark:text-gray-300 dark:hover:text-gray-100'>
                    Registrate
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className='hidden max-h-screen rounded-tr-lg rounded-br-lg border-t border-r border-b pr-10 lg:flex lg:items-center lg:justify-center'>
          <img src='/img/login.png' className='h-10/12 w-10/12' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
