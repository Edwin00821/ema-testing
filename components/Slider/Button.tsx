import React from 'react';

interface Props {
  right?: boolean;
  children: React.ReactNode;
}

const Button = ({ right, children }: Props) => {
  return (
    <button
      className={`pointer-events-auto absolute h-full w-[3rem] cursor-pointer border-none bg-none text-center outline-none hover:fill-white hover:opacity-20 ${
        right ? 'right-0' : 'left-0'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
