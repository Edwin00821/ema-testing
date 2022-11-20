import { useState } from 'react';
import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiCheckDoubleFill,
  RiMessage2Line,
  RiMenu3Fill,
  RiAddLine,
  RiImage2Line,
  RiEmotionHappyLine,
  RiSendPlaneLine,
  RiMore2Fill,
} from 'react-icons/ri';
import { BiMicrophone, BiMap } from 'react-icons/bi';
import { Header } from 'components/Header';
import { Logo } from 'components/Logo';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex h-screen flex-col'>
      {/* Header */}
      {/* <Header /> */}
      <header className='flex h-[8vh] w-full items-center justify-between px-8 dark:bg-[#141517] md:h-[5vh]'>
        <div>
          <Logo />
        </div>
        <form className='hidden md:block'>
          <div className='relative'>
            <input
              type='text'
              className='rounded  py-1 pl-4 pr-8 outline-none dark:bg-[#141517] dark:text-gray-300'
              placeholder='Search'
            />
            <RiSearchLine className='absolute right-2 top-2 dark:text-gray-300' />
          </div>
        </form>
        <div className='flex items-center gap-6'>
          <div className='relative'>
            <RiNotification3Line className='text-xl text-gray-300' />
            <span className='absolute -top-2 -right-2 rounded-full bg-purple-600 py-[2px] px-[6px] text-[10px] text-white'>
              1
            </span>
          </div>
          {/* User */}
          <div className='flex items-center gap-2'>
            <img
              src='https://img.freepik.com/foto-gratis/chico-alegre-feliz-mostrando-gesto-bien_74855-3502.jpg'
              className='h-6 w-6 rounded-full object-cover ring-2 dark:ring-white'
            />
            <RiArrowDownSLine className='dark:text-gray-300' />
          </div>
        </div>
      </header>
      {/* Content */}
      <main className='grid h-[92vh] grid-cols-1 md:h-[90vh] lg:grid-cols-8'>
        {/* Menu movil */}
        <button
          onClick={toggleMenu}
          className='fixed bottom-4 right-4 z-50 rounded-full bg-purple-600 p-3 dark:text-white lg:hidden'
        >
          <RiMenu3Fill />
        </button>
        <section
          className={`fixed top-0 z-50 col-span-2 h-screen w-[80%] overflow-y-scroll p-8 transition-all scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:bg-[#22222A] md:w-[50%] lg:static lg:w-full ${
            showMenu ? 'left-0' : '-left-full'
          }`}
        >
          {/* Title and Search */}
          <div className='mb-8'>
            <h1 className='mb-4 text-3xl text-white'>Messages</h1>
            <form className='hidden md:block'>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full rounded py-2 pl-4 pr-8 outline-none dark:bg-[#050505] dark:text-gray-300'
                  placeholder='Search'
                />
                <RiSearchLine className='absolute right-2 top-3 dark:text-gray-300' />
              </div>
            </form>
          </div>
          {/* Users */}
          <div>
            {/* User */}
            <a
              href='#'
              className='mb-8 flex w-full gap-2 rounded ring-8 ring-white dark:bg-[#1E1F24] dark:ring-[#1E1F24]'
            >
              {/* Image */}
              <div className='relative flex w-[15%] items-center justify-center'>
                <img
                  src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
                  className='h-10 w-10 rounded-full object-cover'
                />
                <RiCheckboxBlankCircleFill className='absolute right-0 bottom-1 rounded-full text-sm text-green-500 ring-2 dark:ring-white' />
              </div>
              {/* Name and Hour */}
              <div className='flex w-[85%] justify-between'>
                <div>
                  <h3 className='font-semibold dark:text-gray-300'>EMA</h3>
                  <p className='text-green-300'>Typing...</p>
                </div>
                <div>
                  <h3 className='dark:text-gray-500'>4:30 PM</h3>
                  <span className='float-right rounded-full bg-red-600 py-1 px-2 text-xs text-white'>
                    2
                  </span>
                </div>
              </div>
            </a>
            {/* All messages */}
            <h5 className='my-8 flex items-center gap-2 dark:text-gray-300'>
              <RiMessage2Line /> All messages
            </h5>
            {/* User */}
            <a href='#' className='mb-8 flex w-full gap-2'>
              {/* Image */}
              <div className='relative flex w-[15%] items-center justify-center'>
                <img
                  src='https://img.freepik.com/foto-gratis/retrato-mujer-senior-sonriente-chaqueta-jean_23-2149082536.jpg'
                  className='h-10 w-10 rounded-full object-cover'
                />
              </div>
              {/* Name and Hour */}
              <div className='flex w-[85%] justify-between'>
                <div>
                  <h3 className='font-semibold dark:text-gray-300'>
                    Killian James
                  </h3>
                  <p className='text-green-300 '>Typing...</p>
                </div>
                <div>
                  <h3 className='dark:text-gray-500'>4:30 PM</h3>
                </div>
              </div>
            </a>
            <a href='#' className='mb-8 flex w-full gap-2'>
              {/* Image */}
              <div className='relative flex w-[15%] items-center justify-center'>
                <img
                  src='https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg'
                  className='h-10 w-10 rounded-full object-cover'
                />
              </div>
              {/* Name and Hour */}
              <div className='flex w-[85%] justify-between'>
                <div>
                  <h3 className='font-semibold dark:text-gray-300'>
                    Design Team
                  </h3>
                  <p className='dark:text-gray-500'>Hello! Everyone</p>
                </div>
                <div>
                  <h3 className='dark:text-gray-500'>9:36 AM</h3>
                  <span className='float-right text-xl text-green-300'>
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className='relative col-span-6 h-screen  p-4 dark:bg-[#1E1F24] md:p-8'>
          {/* Info group */}
          <div className='absolute left-0 top-0 flex w-full items-center gap-8 border-b p-4 dark:border-gray-800 md:p-8'>
            <div>
              <img
                src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
                className='h-14 w-14 rounded-full object-cover md:h-20 md:w-20'
              />
            </div>
            <div className='flex flex-1 flex-col items-center justify-between gap-2 md:flex-row'>
              <div>
                <h1 className='text-xl dark:text-gray-300 md:text-3xl'>
                  Design Team
                </h1>
                <p className='text-sm dark:text-gray-500 md:text-base'>
                  60 members, 10 online
                </p>
              </div>
              {/* Users */}
              <div className='flex items-center gap-4'>
                <div className='flex items-start'>
                  <img
                    src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
                    className='h-8 w-8 rounded-full object-cover'
                  />
                  <img
                    src='https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg'
                    className='h-8 w-8 rounded-full object-cover'
                  />
                  <img
                    src='https://img.freepik.com/foto-gratis/pareja-tiro-medio-pasar-tiempo-naturaleza_23-2149021649.jpg'
                    className='h-8 w-8 rounded-full object-cover'
                  />
                </div>
                <button className='rounded-full p-2.5 dark:bg-[#050505] dark:text-gray-300'>
                  <RiAddLine />
                </button>
              </div>
            </div>
          </div>
          {/* Send Message */}
          <div className='absolute left-0 bottom-0 w-full p-8 dark:bg-[#22222A]'>
            <form className='relative'>
              <BiMicrophone className='absolute left-4 top-[10px] text-xl hover:cursor-pointer dark:text-gray-300' />
              <input
                type='text'
                className='w-full rounded-full py-2 pl-10 pr-28 outline-none dark:bg-[#1E1F24] dark:text-gray-300'
              />
              {/* Icons message */}
              <div className='absolute right-4 top-3 flex items-center gap-2 dark:text-gray-300'>
                <RiImage2Line className='hover:cursor-pointer' />
                <RiEmotionHappyLine className='hover:cursor-pointer' />
                <RiSendPlaneLine className='hover:cursor-pointer' />
                <BiMap className='hover:cursor-pointer' />
              </div>
            </form>
          </div>
          {/* Content messages */}
          <div className='mt-32 max-h-[calc(100%-210px)] overflow-y-scroll scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full'>
            {/* Message user */}
            <div className='flex gap-4'>
              <img
                src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
                className='h-10 w-10 rounded-full object-cover'
              />
              <div>
                <h4 className='mb-2 font-semibold text-gray-300'>
                  Killan James{' '}
                  <span className='ml-8 text-sm font-normal text-gray-500'>
                    10:12 AM
                  </span>
                </h4>
                <div className='mb-2 flex items-center gap-2'>
                  <p className='rounded-tr-lg rounded-br-lg rounded-bl-lg bg-[#292A30] py-2 px-4 text-gray-500'>
                    Hi, Are you still Web Designer{' '}
                  </p>
                  <button className='text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
                <div className='mb-2 flex items-center gap-2'>
                  <p className='rounded-tr-lg rounded-br-lg rounded-bl-lg bg-[#292A30] py-2 px-4 text-gray-500'>
                    Would love to see some design 🙂
                  </p>
                  <button className='text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className='relative my-8'>
              <p className='absolute -top-[14px] ml-[50%] -translate-x-[50%] py-1 px-4 text-center text-sm dark:bg-[#1E1F24] dark:text-gray-600'>
                Today, March 24
              </p>
              <hr className='dark:border-gray-600' />
            </div>
            {/* Message user */}
            <div className='flex gap-4'>
              <img
                src='https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg'
                className='h-10 w-10 rounded-full object-cover'
              />
              <div>
                <h4 className='mb-2 font-semibold dark:text-gray-300'>
                  Claudia Maudi{' '}
                  <span className='ml-8 text-sm font-normal dark:text-gray-500'>
                    10:30 AM
                  </span>
                </h4>
                <div className='mb-2 flex items-center gap-2'>
                  <p className='rounded-tr-lg rounded-br-lg rounded-bl-lg py-2 px-4 dark:bg-[#292A30] dark:text-gray-500'>
                    Lorem Ipsum ha sido el texto de relleno estándar de las
                    industrias desde el año 1500
                  </p>
                  <button className='text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
                <div className='mb-2 flex items-center gap-2'>
                  <p className='rounded-tr-lg rounded-br-lg rounded-bl-lg py-2 px-4 dark:bg-[#292A30] dark:text-gray-500'>
                    Lorem Ipsum ha sido el texto 🙂
                  </p>
                  <button className='dark:text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
                <div className='mb-2 flex items-center gap-2'>
                  <img
                    src='https://img.freepik.com/foto-gratis/retrato-feliz-mediados-mujer-adulta-abrazando-su-madre-senior_1262-18557.jpg'
                    className='h-40 w-32 rounded-lg object-cover'
                  />
                  <img
                    src='https://img.freepik.com/foto-gratis/pareja-sonriente-tiro-medio-fuera_23-2148984226.jpg'
                    className='h-40 w-32 rounded-lg object-cover'
                  />
                  <button className='dark:text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Message user main */}
            <div className='flex justify-end gap-4'>
              <img
                src='https://img.freepik.com/foto-gratis/abuelo-humoristico-amistoso-barba-blanca-sonriendo-alegria-camara-elegante-ordenado-hombre-negocios-mayor-gafas-regocijandose-resultados-exitosos-trabajo-efectivo-posando-aislado-estudio_343059-4215.jpg'
                className='order-1 h-10 w-10 rounded-full object-cover'
              />
              <div>
                <h4 className='mb-2 text-right font-semibold dark:text-gray-300'>
                  <span className='mr-8 text-sm font-normal dark:text-gray-500'>
                    10:12 AM
                  </span>
                  Distin Watson{' '}
                </h4>
                <div className='mb-2 flex items-center justify-end gap-2'>
                  <p className='order-1 rounded-tl-lg rounded-bl-lg rounded-br-lg bg-purple-500 py-2 px-4 text-white'>
                    Hi, Are you still Web Designer{' '}
                  </p>
                  <button className='dark:text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Message user */}
            <div className='flex gap-4'>
              <img
                src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
                className='h-10 w-10 rounded-full object-cover'
              />
              <div>
                <h4 className='mb-2 font-semibold dark:text-gray-300'>
                  Killan James{' '}
                  <span className='ml-8 text-sm font-normal dark:text-gray-500'>
                    10:12 AM
                  </span>
                </h4>
                <div className='mb-2 flex items-center gap-2'>
                  <p className='rounded-tr-lg rounded-br-lg rounded-bl-lg py-2 px-4 dark:bg-[#292A30] dark:text-gray-500'>
                    Hi, Are you still Web Designer{' '}
                  </p>
                  <button className='dark:text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
                <div className='mb-2 flex items-center gap-2'>
                  <p className='rounded-tr-lg rounded-br-lg rounded-bl-lg py-2 px-4 dark:bg-[#292A30] dark:text-gray-500'>
                    Would love to see some design 🙂
                  </p>
                  <button className='dark:text-gray-500'>
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
