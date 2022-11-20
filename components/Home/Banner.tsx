import { RiCheckboxBlankCircleFill, RiPlayFill } from 'react-icons/ri';
import { Box } from '@mui/material';
import Image from 'next/image';

const Banner = () => {
  return (
    <Box
      className='mt-4 grid min-h-screen grid-cols-1 md:px-8 lg:grid-cols-2'
      id='home'
    >
      <Box className='flex content-center'>
        {/* Information */}
        <Box className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
          <Box className='flex flex-col gap-8'>
            <h1 className='text-center text-6xl font-bold leading-[4.5rem] dark:text-white sm:text-7xl md:text-8xl '>
              Educational Material
              <span className='relative mt-3 inline-block border-8 border-secondary py-2 px-6 text-secondary'>
                Assistant
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -left-5 -top-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -right-5 -top-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -right-5 -bottom-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -left-5 -bottom-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
              </span>
            </h1>
            <p className='text-justify text-xl leading-[2.5rem] text-gray-500 dark:text-gray-300 md:text-xl '>
              <span className='font-bold'>
                “Impulsando el aprendizaje con tecnología”
              </span>{' '}
              Educational Material Assistent es un asistente que pretende apoyar
              con la organización y el aprendizaje de manera visual para los
              alumnos de la carrera de programación en el CECyT 9.
            </p>
            <Box className='flex flex-col items-center gap-4 md:flex-row'>
              <button className='flex w-full items-center justify-start gap-4 rounded-xl py-2 px-8 text-left text-xl xl:w-auto'>
                <RiPlayFill className='box-content rounded-full bg-gray-300 p-4 text-secondary' />{' '}
                ¿Eres nuevo en EMA? <br /> mira este video introductorio
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='hidden items-center lg:flex'>
        <img src='/img/banner.png' className='w-full object-cover' />
      </Box>
    </Box>
  );
};

export default Banner;
