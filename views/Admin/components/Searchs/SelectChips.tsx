import { RiFilter3Line } from 'react-icons/ri';

const SelectChips = () => {
  return (
    <form className='col-span-1'>
      <div className='relative'>
        <RiFilter3Line className='absolute left-2 top-3 text-secondary-light' />
        <input
          type='text'
          className='w-full bg-white py-2 pl-8 pr-4 outline-none'
          placeholder='Filters'
        />
        <span className='absolute right-2 top-[7px] rounded-full bg-secondary-light py-1 px-[9px] text-sm text-white'>
          4
        </span>
      </div>
    </form>
  );
};

export default SelectChips;
