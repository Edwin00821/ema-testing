import { RiSearchLine } from 'react-icons/ri';

const SearchChats = () => {
  return (
    <div className='p-5'>
      <h2 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
        Chats
      </h2>
      <form className='hidden md:block'>
        <div className='relative'>
          <input
            type='text'
            className='w-full rounded py-2 pl-4 pr-8 outline-none bg-gray-200 dark:bg-[#050505] dark:text-gray-300'
            placeholder='Search'
          />
          <RiSearchLine className='absolute right-2 top-3 dark:text-gray-300' />
        </div>
      </form>
    </div>
  );
};

export default SearchChats;
