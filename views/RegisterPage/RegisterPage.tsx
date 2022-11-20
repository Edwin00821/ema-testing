import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { FaUserAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';

import { AcademicDataForm, LoadBar, PersonalDataForm } from './components';

import { AuthService } from 'services/ema/V1/auth';
import { RegisterContext } from './context';
import { toast, ToastContainer, toastConfig, toastContainerConfig } from 'libs';

const RegisterPage = () => {
  const { indexActive, personalData, academicData, setIndexActive } =
    useContext(RegisterContext);
  const router = useRouter();

  const [counter, setCounter] = useState(3);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (personalData && academicData) {
      const id = toast.loading('Validando datos...', {
        autoClose: 2000,
        theme: 'light',
        position: 'top-right',
        ...toastConfig,
      });

      AuthService.registerStudent({
        ...personalData,
        ...academicData,
      })
        .then(() => {
          toast.update(id, {
            render: 'Estudiante registrado 😊',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
            theme: 'light',
            ...toastConfig,
          });
          setIndexActive(3);
          setIsComplete(true);
        })
        .catch(() => {
          toast.update(id, {
            render: 'Ocurrio un error 😓',
            type: 'error',
            isLoading: false,
            autoClose: 2000,
            theme: 'light',
            ...toastConfig,
          });
        });
    }
  }, [personalData, academicData]);

  useEffect(() => {
    if (isComplete === true) {
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);

      if (counter === 1) {
        router.push('/login');
      }
    }
  }, [isComplete, counter]);

  return (
    <div className='relative bg-primary-light dark:bg-tertiary'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        theme='light'
        {...toastContainerConfig}
      />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hidden h-full w-full items-center justify-center gap-3 md:flex'>
          <LoadBar
            title='Informacion Personal'
            description='Solo son algunos datos personales'
            active={indexActive === 1}
            complete={personalData ? true : false}
            icon={<FaUserAlt size={40} />}
          />
          <FaArrowRight size={40} />
          <LoadBar
            title='Informacion Academica'
            description='Necesitamos esto para poder ayudarte'
            active={indexActive === 2}
            complete={academicData ? true : false}
            icon={<FaUserTie size={40} />}
          />
          <FaArrowRight size={40} />
          <LoadBar
            title='Completado'
            description='!Felicidades te has registrado!'
            active={indexActive === 3}
            icon={<BsCheckLg size={40} />}
          />
        </div>
        <div className='my-8 w-1/2 md:w-3/12 '>
          <p className='relative text-center text-gray-500 before:absolute before:-left-[60px] before:top-[50%] before:h-[1px] before:w-full before:max-w-[50px] before:bg-current after:absolute after:top-[50%] after:-right-[60px] after:h-[1px] after:w-full after:max-w-[50px] after:bg-current dark:text-gray-200 md:before:-left-[140px] md:before:max-w-[120px] md:after:-right-[140px] md:after:max-w-[120px]'>
            Para continuar, necesitamos los siguientes datos
          </p>
        </div>
        <div className={`mb-8 w-full ${indexActive === 1 ? '' : 'hidden'}`}>
          <PersonalDataForm />
        </div>
        <div className={`mb-8 w-full ${indexActive === 2 ? '' : 'hidden'}`}>
          <AcademicDataForm />
        </div>
        <div className={`mb-8 w-full ${indexActive === 3 ? '' : 'hidden'}`}>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
              <p className='text-2xl font-bold'>Completado</p>
              <p className='text-2xl font-bold'>
                Te redireccionaremos al login en {counter}
              </p>
            </div>
            <p className='text-center text-gray-500'>
              Te has registrado correctamente, ahora puedes iniciar sesion
            </p>
          </div>
        </div>
        <span className='text-gray-500 dark:text-gray-300'>
          ¿Ya tienes cuenta?{' '}
          <Link href='/login'>
            <a className='text-gray-900 hover:underline  hover:decoration-secondary hover:decoration-wavy dark:text-gray-100 '>
              Inicia Sesión
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default RegisterPage;
