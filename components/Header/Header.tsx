import Link from 'next/link';
import type { Navs } from 'typings';

import { useSelector } from 'react-redux';
import { AppStore } from 'redux/store';

import ListOfNavs from './ListOfNavs';
import { Logo } from 'components/Logo';
import { useScrolled } from 'hooks/useScrolled';

import { Box } from '@mui/material';
import HamburguerMenu from './HamburguerMenu';

interface Props {
  navs?: Navs[];
  isHome?: boolean;
}
const Header = ({ navs, isHome }: Props) => {
  const { isScrolled } = useScrolled();
  const studentState = useSelector((state: AppStore) => state.student);
  const adminState = useSelector((state: AppStore) => state.admin);
  const { isLogued } = studentState || adminState;

  return (
    <header
      className={`flex items-center justify-between ${
        isScrolled && 'bg-primary-dark backdrop-blur-sm dark:bg-tertiary-dark'
      }`}
    >
      <Logo />
      {isHome && (
        <>
          <nav className='hidden w-6/12 items-center justify-center gap-8 font-medium text-gray-500 dark:text-gray-300 lg:flex'>
            <ListOfNavs navs={navs} />
          </nav>
          <Box className='hidden items-center justify-center gap-8 lg:flex'>
            {isLogued ? (
              <a>a</a>
            ) : (
              <>
                <Link href={'/register'}>
                  <a className='rounded-lg py-2 px-4 hover:border hover:border-secondary hover:text-secondary'>
                    Registrate
                  </a>
                </Link>
                <Link href={'/login'}>
                  <a
                    type='button'
                    className='rounded-lg border border-gray-600 py-2 px-4 hover:border-secondary hover:text-secondary '
                  >
                    Iniciar Sesion
                  </a>
                </Link>
              </>
            )}
          </Box>
          {/* <!-- Boton de menu movil --> */}
          <Box className='flex w-6/12 justify-end text-white lg:hidden'>
            <HamburguerMenu />
          </Box>

        </>
      )}
    </header>
  );
};

export default Header;
