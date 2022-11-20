import { SearchTable, SelectChips, FilterChips } from '.';

const FilterTable = () => {
  return (
    <div className='mb-6 grid grid-cols-1 items-center gap-4 md:grid-cols-4'>
      <SearchTable />
      <FilterChips />
      <SelectChips />
    </div>
  );
};

export default FilterTable;
