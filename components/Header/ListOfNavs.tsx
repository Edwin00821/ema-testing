import React from 'react';
import Link from 'next/link';
import { Navs } from 'typings';

interface Props {
  navs: Navs[];
}

const ListOfNavs = ({ navs }: Props) => {
  const active = true;
  return (
    <>
      {navs?.map(({ name, href }) => (
        <Link href={href} key={name}>
          <a
            className={`
            xl:text-base
            2xl:text-lg
            hover:text-gray-900
            dark:hover:text-white
        ${
          active
            ? 'text-gray-900 underline decoration-secondary decoration-wavy dark:text-white'
            : ''
        } transition-colors duration-300`}
          >
            {name}
          </a>
        </Link>
      ))}
    </>
  );
};

export default ListOfNavs;
