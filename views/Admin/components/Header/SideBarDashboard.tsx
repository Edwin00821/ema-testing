import React, { useState } from 'react';

import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri';

import { Logo } from 'components/Logo';
import { SideBarMenuAdmin } from './';

const SideBarDashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-[20%] bg-white transition-all md:w-[40%] lg:static lg:w-full ${
        sidebar ? 'left-0' : '-left-full'
      }  flex h-screen  flex-col justify-between border-r p-8`}
    >
      <Logo />
      <div className='flex flex-col justify-between'>
        <SideBarMenuAdmin />
        {/* Btn menu movil */}
        <button
          onClick={handleSidebar}
          className='fixed bottom-4 right-4 z-40 block rounded-full bg-purple-600 p-2 text-2xl text-black lg:hidden'
        >
          {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </div>
    </header>
  );
};

export default SideBarDashboard;
