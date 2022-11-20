import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  icon: JSX.Element;
}
const NavsDashboard = ({ title, href, icon }: Props) => {
  return (
    <li>
      <Link href={href}>
        <a className='flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-secondary-light hover:text-white'>
          {icon}
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavsDashboard;
