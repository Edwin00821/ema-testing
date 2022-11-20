import Developers from './Developers';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box className='w-full bg-primary-dark p-8 dark:bg-tertiary-dark'>
      <Box className='grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8'>
        <Box className='flex flex-col gap-4 md:col-span-12 xl:col-span-4'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
            EMA
          </h1>
          <p className='text-justify text-gray-600 dark:text-gray-400'>
            Es una asistente que pretende apoyar con la organización y el
            aprendizaje de manera visual para los alumnos de la carrera de
            programación en el CECyT 9.
          </p>
          <Developers />
        </Box>
        <Box className='md:col-span-4 xl:col-span-3'>
          <h2 className='mb-6 font-bold uppercase'>Redes sociales</h2>
          <nav>
            <a
              href='https://www.facebook.com/jtdevsmx'
              className='flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-800'
              target='_blank'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/733/733547.png'
                className='h-[20px] w-[20px]'
                alt='JT Devs'
              />
              EMA
            </a>
            <a
              href='https://www.instagram.com/jtdevsmx/'
              className='flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-800'
              target='_blank'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
                className='h-[20px] w-[20px]'
                alt='JT Devs'
              />
              EMA
            </a>
            <a
              href='https://twitter.com/jtdevsmx'
              className='flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-800'
              target='_blank'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/1384/1384065.png'
                className='h-[20px] w-[20px]'
                alt='JT Devs'
              />
              AKDMY_EMA
            </a>
          </nav>
        </Box>
        <Box className='md:col-span-4 xl:col-span-3'>
          <h2 className='mb-6 font-bold uppercase'>Contacto</h2>
          <Box className='flex flex-col gap-4'>
            <p className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              Centro Estudios Científicos y Tecnológicos (CECyT 9) "Juan de Dios
              Bátiz"
            </p>
            <p className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              ema_akdmy@gmail.com
            </p>
          </Box>
        </Box>
      </Box>
      <hr className='my-4' />
      <Box className='flex flex-col items-center justify-between gap-4 xl:flex-row'>
        <p className='text-center text-gray-800 dark:text-gray-100 md:text-left'>
          &copy; 2022
          <span className='font-bold text-gray-900 dark:text-gray-700'>
            {' '}
            EMA.
          </span>{' '}
          Todos los derechos reservados.
        </p>
        <Box className='flex flex-col items-center gap-2 md:flex-row'>
          <a
            href='#'
            className='text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          >
            Terminos y condiciones
          </a>
          <span className='hidden md:flex'>|</span>
          <a
            href='#'
            className='text-gray-700 transition-colors hover:text-gray-900  dark:text-gray-400 dark:hover:text-gray-50 '
          >
            Política de privacidad
          </a>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
