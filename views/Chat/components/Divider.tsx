import React from 'react';

const Divider = () => {
  return (
    <div className='relative my-8'>
      <p className='absolute -top-[14px] ml-[50%] -translate-x-[50%] py-1 px-4 text-center text-sm bg-white dark:bg-[#1E1F24] dark:text-gray-600'>
        Today, March 24
      </p>
      <hr className='dark:border-gray-600' />
    </div>
  );
};

export default Divider;
