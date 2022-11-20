import Link from 'next/link';
import { SlGraduation } from 'react-icons/sl';
import SwitchThemeMode from './SwitchThemeMode';

const Logo = () => {
  return (
    <div className='flex items-center gap-5'>
      <Link href='/'>
        <a className='flex items-center gap-2'>
          <SlGraduation size={50} className={'text-secondary'} />
          <h1 className='text-3xl font-bold  dark:text-white'>EMA</h1>
        </a>
      </Link>
      <SwitchThemeMode />
    </div>
  );
};

export default Logo;
