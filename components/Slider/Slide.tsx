import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Slide = ({ children }: Props) => {
  return (
    <Box className='min-w-full overflow-hidden duration-150 ease-out '>
      {children}
    </Box>
  );
};

export default Slide;
