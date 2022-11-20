import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const Developers = () => {
  //HTMLSpanElement | null
  const el = useRef<any>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Astudillo Perez Edwin Uriel',
        'Freyre Valderrama Aaron',
        'Garcia Acosta Sergio Adrian',
        'Guzmán Gutierez Alan Joshep',
        'Jimenez García Cinthya Fernanda',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el?.current, options);

    return () => {
      typed?.current?.destroy();
    };
  }, []);

  return (
    <>
      <Box className='flex flex-col gap-8 md:flex-row md:items-center md:gap-20'>
        <Box>
          <p className='block font-mono '>
            Dessarolladores: <span ref={el}></span>
          </p>
        </Box>
      </Box>
    </>
  );
};
{/* <button className='w-full rounded-lg bg-[#5a7bff] py-4 px-6 text-white shadow-2xl shadow-[#5a7bff] md:w-auto md:py-2'>
Contact us
</button> */}
export default Developers;
