import { Box } from '@mui/material'

const Mision = () => {
  return (
    <Box id='mision' className="py-32 max-w-screen-2xl m-auto">
      <Box className='flex content-center justify-center'>
        <h1 className='m-4 text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl  xl:leading-[4.5rem]'>
          MISION Y VISIÓN DEL PROYECTO
        </h1>
      </Box>
      <Box className='mt-1 grid grid-cols-1 md:px-8 lg:grid-cols-2'>

        <Box className='flex items-center justify-center'>
          <Box className="max-w-sm rounded overflow-hidden">
            <img className="max-h-fit" src='img/Mision.png' alt="Sunset in the mountains"/>
            <Box className="px-6 py-4">
              <Box className="font-bold text-xl mb-2 text-center">MISIÓN:</Box>
              <p className="text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl">
                Presentar software que cumpla con las necesidades de los
                usuarios, al mismo tiempo de ser líderes en la figura para hacer
                negocios socialmente responsables.
              </p>
            </Box>
          </Box>
        </Box>

        <Box className='flex items-center justify-center'>
          <Box className="max-w-sm rounded overflow-hidden">
            <img className="max-h-fit" src='img/Vision.png' alt="Sunset in the mountains"/>
            <Box className="px-6 py-4">
              <Box className="font-bold text-xl mb-2 text-center">VISIÓN:</Box>
              <p className="text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl">
                Ofrecer software e innovar la forma en que aprendemos.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mision;
