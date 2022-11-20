import React from 'react';

interface Props {
  title: string;
  description: string;
  active?: boolean;
  complete?: boolean;
  icon: JSX.Element;
}

const LoadBar = ({ title, description, active, complete, icon }: Props) => {
  return (
    <div
      className={`flex rounded-r-xl ${
        active && 'shadow-lg shadow-secondary/50'
      }`}
    >
      {/* ${
          active
            ? 'lg:h-20 lg:w-20 xl:h-32 xl:w-24'
            : 'lg:h-20 lg:w-16 xl:h-28 xl:w-20  '
        } */}
      <div
        className={`flex items-center justify-center py-5 ${
          active || complete ? ' bg-secondary/20  ' : 'bg-gray-200'
        } ${active ? 'h-32 w-24' : 'h-28 w-20  '}
        
        `}
      >
        {icon}
      </div>
      <div
        className={`flex w-56 flex-wrap items-center rounded-r-xl p-4 py-5 text-white ${
          active || complete ? 'bg-secondary/70' : 'bg-gray-400'
        } ${active ? 'h-32 w-56' : 'w-54 h-28'}`}
      >
        <h4 className='font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LoadBar;
