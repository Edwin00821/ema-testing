import { RiMore2Fill } from 'react-icons/ri';

const MessageUserMain = () => {
  return (
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
          <p className='order-1 rounded-tl-lg rounded-bl-lg rounded-br-lg bg-primary py-2 px-4 text-white'>
            Hi, Are you still Web Designer{' '}
          </p>
          <button className='dark:text-gray-500'>
            <RiMore2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageUserMain;
