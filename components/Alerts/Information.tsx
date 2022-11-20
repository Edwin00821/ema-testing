import { Box } from '@mui/material';

const Information = () => {
  <Box className='flex max-w-md items-center gap-3 rounded-lg border-l-4 border-yellow-600 bg-white py-4 px-6 shadow-lg'>
    <Box>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7 text-yellow-600'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </Box>
    <Box>
      <h3 className='font-semibold'>Advertencia</h3>
      <p className='text-gray-500'>
        Se ha creado la cuenta, pero esta inactiva
      </p>
    </Box>
  </Box>;
};

export default Information;
