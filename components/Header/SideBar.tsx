import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {showSidebar ? (
        <button
          className='fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-white'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className='fixed  right-10 top-6 z-30 flex cursor-pointer items-center'
          fill='#2563EB'
          viewBox='0 0 100 80'
          width='40'
          height='40'
        >
          <rect width='100' height='10'></rect>
          <rect y='30' width='100' height='10'></rect>
          <rect y='60' width='100' height='10'></rect>
        </svg>
      )}

      <div className='fixed top-0 right-0 z-40  h-full w-[35vw] bg-blue-600 p-10 pl-20 text-white'>
        <h3 className='mt-20 text-4xl font-semibold text-white'>
          I am a sidebar
        </h3>
      </div>
    </>
  );
};

export default SideBar;
