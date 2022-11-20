import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { Switch } from '@headlessui/react';

import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const SwitchThemeMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const [themeMode, setThemeMode] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted) {
      theme === 'system'
        ? systemTheme === 'dark'
          ? setThemeMode(true)
          : setThemeMode(false)
        : theme === 'dark'
        ? setThemeMode(true)
        : setThemeMode(false);
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted)
      switch (themeMode) {
        case true:
          setThemeMode(true);
          setTheme('dark');
          break;
        case false:
          setThemeMode(false);
          setTheme('light');
          break;
        default:
          setTheme('system');
          break;
      }
  }, [themeMode]);

  return (
    <Switch
      checked={themeMode}
      onChange={setThemeMode}
      className={`${
        themeMode ? 'bg-slate-700' : 'bg-secondary'
      } relative inline-flex h-6 w-12 items-center rounded-full`}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          themeMode ? 'translate-x-6' : 'translate-x-0'
        } flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition`}
      >
        {themeMode ? (
          <BsMoonStarsFill
            width={10}
            className='scale-100 transform text-black opacity-100 transition duration-500'
          />
        ) : (
          <BsSunFill
            width={10}
            className='scale-100 transform text-secondary transition-transform duration-300'
          />
        )}
      </span>
    </Switch>
  );
};

export default SwitchThemeMode;
