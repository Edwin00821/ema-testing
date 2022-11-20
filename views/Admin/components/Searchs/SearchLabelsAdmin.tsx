import React from 'react';

import { RiCloseLine } from 'react-icons/ri';

function SearchLabelsAdmin() {
  return (
    <>
      <div className='mb-20 flex flex-wrap items-center gap-4'>
        <span className='flex items-center gap-4 rounded-full bg-white py-2 pl-4 pr-6'>
          <button className='rounded-full bg-secondary-light p-1 text-xs text-primary'>
            <RiCloseLine />
          </button>{' '}
          <span className='text-gray-500'>Design</span>
        </span>
        <span className='flex items-center gap-4 rounded-full bg-white py-2 pl-4 pr-6'>
          <button className='rounded-full bg-secondary-light p-1 text-xs text-primary'>
            <RiCloseLine />
          </button>{' '}
          <span className='text-gray-500'>Regular</span>
        </span>
        <span className='flex items-center gap-4 rounded-full bg-white py-2 pl-4 pr-6'>
          <button className='rounded-full bg-secondary-light p-1 text-xs text-primary'>
            <RiCloseLine />
          </button>{' '}
          <span className='text-gray-500'>Full time</span>
        </span>
        <span className='flex items-center gap-4 rounded-full bg-white py-2 pl-4 pr-6'>
          <button className='rounded-full bg-secondary-light p-1 text-xs text-primary'>
            <RiCloseLine />
          </button>{' '}
          <span className='text-gray-500'>B2B</span>
        </span>
        <button className='ml-4 text-gray-500'>Clear All</button>
      </div>
    </>
  );
}

export default SearchLabelsAdmin;
