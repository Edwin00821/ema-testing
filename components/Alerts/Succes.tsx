import { Box } from '@mui/material';

const Succes = () => {
  <Box className='flex max-w-md items-center gap-3 rounded-lg border-l-4 border-green-600 bg-white py-4 px-6 shadow-lg'>
    <Box>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7 text-green-600'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
    </Box>
    <Box>
      <h3 className='font-semibold'>Éxito</h3>
      <p className='text-gray-500'>La cuenta se ha creado correctamente</p>
    </Box>
  </Box>;
};

export default Succes;
