import { RiMapPinRangeLine } from 'react-icons/ri';

const FilterChips = () => {
  return (
    <form className='col-span-1'>
      <div className='relative'>
        <RiMapPinRangeLine className='absolute left-2 top-3 text-secondary-light' />
        <select
          className='w-full bg-white py-[10px] pl-8 pr-4 outline-none'
          placeholder='Search'
        >
          <option>Anywhere</option>
        </select>
      </div>
    </form>
  );
};

export default FilterChips;
