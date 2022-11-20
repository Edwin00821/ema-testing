import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';

function SearchResultsAdmin() {
  return (
    <>
      {/* Results */}
      <div className='mb-8 flex items-center justify-between'>
        <p className='text-gray-500'>
          We've found{' '}
          <span className='font-bold text-secondary-light'>523</span> jobs!
        </p>
        <p className='flex items-center gap-2'>
          Sort by:{' '}
          <span className='font-bold text-secondary-light hover:cursor-pointer'>
            Date
          </span>{' '}
          <RiArrowDownSLine />
        </p>
      </div>
    </>
  );
}

export default SearchResultsAdmin;
