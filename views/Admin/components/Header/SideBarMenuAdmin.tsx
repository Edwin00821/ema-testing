import React from 'react';
import Link from 'next/link';

import { ListOfNavsDashboard } from './';
import { NavAdmin } from 'libs';

import { RiLogoutBoxRLine } from 'react-icons/ri';

function SideBarMenuAdmin() {
  return (
    <div className='flex h-[80vh] flex-col justify-between lg:static'>
      {/* Menu */}
      {/* <nav>
        <ul>
          <li>
            <a
              href='#'
              className='flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
            >
              <RiDashboardLine />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
            >
              <RiBriefcaseLine />
              Job Board
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
            >
              <RiCalendar2Line />
              Shedule
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'
            >
              <RiMessage2Line />
              Messenger
            </a>
          </li>
        </ul>
      </nav> */}
      <ListOfNavsDashboard menu={NavAdmin} />

      <Link href={'/admin'}>
        <a className='flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'>
          <RiLogoutBoxRLine />
          Logout
        </a>
      </Link>
    </div>
  );
}

export default SideBarMenuAdmin;
