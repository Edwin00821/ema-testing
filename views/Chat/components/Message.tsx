import { LegacyRef, useState, useEffect, useRef } from 'react';
import { RiMore2Fill } from 'react-icons/ri';

interface Props {
  children: React.ReactNode;
  main?: boolean;
}

const Message = ({ children, main }: Props) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (messageRef.current) {
      setHeight(messageRef.current.offsetHeight);
    }
  };

  const handleClikc = () => {
    setHeight(0);
  };

  useEffect(() => {
    handleResize();
  }, [messageRef]);
  return (
    <div
      className={`mb-2 flex items-center ${main && 'justify-end'} gap-2`}
      ref={messageRef}
    >
      <div
        className={` max-w-full rounded-bl-lg py-2 px-4 ${
          main
            ? 'order-1 rounded-tl-lg rounded-br-lg bg-secondary text-white '
            : 'rounded-tr-lg rounded-br-lg bg-gray-100 dark:bg-[#292A30] dark:text-gray-100'
        }`}
      >
        <div
          className={`${height === 0 ? '' : height > 150 && 'h-[150px] overflow-hidden' }`}
        >
          {children}
        </div>
        {height > 150 && (
          <button
            onClick={handleClikc}
            className='mt-2 text-blue-500 transition-colors hover:text-sky-500'
          >
            Leer más
          </button>
        )}
      </div>
      <button className='text-gray-500'>
        <RiMore2Fill />
      </button>
    </div>
  );
};

export default Message;
