import { RiSearchLine } from 'react-icons/ri';

const SearchTable = () => {
  return (
    <form className='col-span-1 md:col-span-2'>
      <div className='relative'>
        <RiSearchLine className='absolute left-2 top-3 text-secondary-light' />
        <input
          type='text'
          className='w-full bg-white py-2 pl-8 pr-4 outline-none'
          placeholder='Search'
        />
      </div>
    </form>
  );
};

export default SearchTable;
