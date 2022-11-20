import { Box } from '@mui/material';

const Philosophy = () => {
  return (
    <Box id='filosofia' className='m-auto max-h-screen max-w-screen-2xl pt-32'>
      <Box className='flex content-center justify-center'>
        <h1 className='m-4 text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl xl:leading-[4.5rem]'>
          FILOSOFIA Y PROPOSITO DEL PROYECTO
        </h1>
      </Box>
      <Box className='-mt-24 grid min-h-screen grid-cols-1 md:px-8 lg:grid-cols-2'>
        <Box className='flex items-center justify-center'>
          <Box className='hidden items-center justify-center lg:flex'>
            <img src='img/Filosofia.png' className='object-cover' />
          </Box>
        </Box>

        <Box className='flex content-center'>
          <Box className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
            <Box className='flex flex-col gap-8'>
              <p className='text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
                <span className='mb-2 text-center text-xl font-bold'>
                  FILOSOFÍA:
                </span>
                <br />
                Creemos que cualquier persona que tenga libre albedrío, puede
                aprender sin la necesidad de un profesor.
              </p>
            </Box>
          </Box>
        </Box>

        <Box className='flex content-center justify-center'>
          <Box className='flex max-h-52 items-center justify-center p-8 md:col-span-5 xl:p-16'>
            <Box className='flex flex-col gap-8'>
              <p className='text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
                <span className='mb-2 text-center text-xl font-bold'>
                  PROPOSITO:
                </span>
                <br />
                Ofrecer software e innovar la forma en que aprendemos.
              </p>
            </Box>
          </Box>
        </Box>

        <Box className='flex max-h-52 items-center justify-center'>
          <Box className='hidden items-center justify-center lg:flex'>
            <img src='img/Proposito.png' className='object-cover' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Philosophy;
