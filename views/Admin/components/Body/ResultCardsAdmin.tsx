import React from 'react';

import {
  RiDropboxFill,
  RiTwitchLine,
  RiGoogleLine,
  RiAmazonLine,
} from 'react-icons/ri';

import { DiDatabase } from 'react-icons/di';

function ResultCardsAdmin() {
  return (
    <div className='h-[70%] overflow-y-scroll'>
      <a
        href='#'
        className='mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'
      >
        {/* Icon */}
        <div className='flex w-full items-center justify-start md:w-[10%] md:justify-center'>
          <DiDatabase className='rounded-md bg-secondary-light p-4 text-7xl text-primary' />
        </div>
        {/* Title */}
        <div className='w-full md:w-[70%]'>
          <h1 className='mb-2 flex items-center gap-4 text-xl'>
            UX Designer{' '}
            <span className='bg-purple-100 py-1 px-2 text-xs font-bold text-purple-600'>
              Remote
            </span>
            <span className='bg-green-100 py-1 px-2 text-xs font-bold text-green-600'>
              Sketch
            </span>
          </h1>
          <p className='text-gray-500'>Dropbox ---- Warzawa</p>
        </div>
        {/* Time */}
        <div className='flex w-full flex-col items-end md:w-[20%]'>
          <h3 className='mb-2 text-xl text-gray-500'>8.8 - 13.7k PLN</h3>
          <p className='text-gray-500'>2 days ago</p>
        </div>
      </a>
      <a
        href='#'
        className='mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'
      >
        {/* Icon */}
        <div className='flex w-full items-center justify-start md:w-[10%] md:justify-center'>
          <RiTwitchLine className='rounded-md bg-secondary-light p-4 text-7xl text-primary' />
        </div>
        {/* Title */}
        <div className='w-full md:w-[70%]'>
          <h1 className='mb-2 flex items-center gap-4 text-xl'>
            Product Designer{' '}
            <span className='bg-purple-100 py-1 px-2 text-xs font-bold text-purple-600'>
              Remote
            </span>
          </h1>
          <p className='text-gray-500'>Twitch ---- Wroclaw</p>
        </div>
        {/* Time */}
        <div className='flex w-full flex-col items-end md:w-[20%]'>
          <h3 className='mb-2 text-xl text-gray-500'>8.8 - 13.5k PLN</h3>
          <p className='text-gray-500'>2 days ago</p>
        </div>
      </a>
      <a
        href='#'
        className='mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'
      >
        {/* Icon */}
        <div className='flex w-full items-center justify-start md:w-[10%] md:justify-center'>
          <RiGoogleLine className='rounded-md bg-secondary-light p-4 text-7xl text-primary' />
        </div>
        {/* Title */}
        <div className='w-full md:w-[70%]'>
          <h1 className='mb-2 flex items-center gap-4 text-xl'>
            UX/UI Designer{' '}
            <span className='bg-purple-100 py-1 px-2 text-xs font-bold text-purple-600'>
              Remote
            </span>
            <span className='bg-yellow-100 py-1 px-2 text-xs font-bold text-yellow-600'>
              Javascript
            </span>
          </h1>
          <p className='text-gray-500'>Google ---- Wroclaw</p>
        </div>
        {/* Time */}
        <div className='flex w-full flex-col items-end md:w-[20%]'>
          <h3 className='mb-2 text-xl text-gray-500'>8.8 - 13.5k PLN</h3>
          <p className='text-gray-500'>2 days ago</p>
        </div>
      </a>
      <a
        href='#'
        className='mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'
      >
        {/* Icon */}
        <div className='flex w-full items-center justify-start md:w-[10%] md:justify-center'>
          <RiAmazonLine className='rounded-md bg-secondary-light p-4 text-7xl text-primary' />
        </div>
        {/* Title */}
        <div className='w-full md:w-[70%]'>
          <h1 className='mb-2 flex items-center gap-4 text-xl'>
            Amazon Designer{' '}
            <span className='bg-purple-100 py-1 px-2 text-xs font-bold text-purple-600'>
              Remote
            </span>
            <span className='bg-red-100 py-1 px-2 text-xs font-bold text-red-600'>
              Adobe
            </span>
          </h1>
          <p className='text-gray-500'>Amazon ---- Wroclaw</p>
        </div>
        {/* Time */}
        <div className='flex w-full flex-col items-end md:w-[20%]'>
          <h3 className='mb-2 text-xl text-gray-500'>8.8 - 13.5k PLN</h3>
          <p className='text-gray-500'>2 days ago</p>
        </div>
      </a>
    </div>
  );
}

export default ResultCardsAdmin;
