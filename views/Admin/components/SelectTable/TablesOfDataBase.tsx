import React from 'react';
import Link from 'next/link';

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  quantityOfRegisters: string;
  lastModification: string;
}
const TablesOfDataBase = ({
  icon,
  title,
  description,
  quantityOfRegisters,
  lastModification,
}: Props) => {
  return (
    <Link href={'/admin'}>
      <a className='mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'>
        {/* Icon */}
        <div className='flex w-full items-center justify-start md:w-[10%] md:justify-center'>
          {icon}
        </div>
        {/* Title */}
        <div className='w-full md:w-[70%]'>
          <h1 className='mb-2 flex items-center gap-4 text-xl'>
            {title}{' '}
          </h1>
          <p className='text-gray-500'>{description}</p>
        </div>
        {/* Time */}
        <div className='flex w-full flex-col items-end md:w-[20%]'>
          <h3 className='mb-2 text-xl text-gray-500'>
            {quantityOfRegisters} Registros
          </h3>
          <p className='text-gray-500'>{lastModification}</p>
        </div>
      </a>
    </Link>
  );
};

export default TablesOfDataBase;
