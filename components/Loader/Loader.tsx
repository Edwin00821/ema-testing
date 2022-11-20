import { BiLoader } from 'react-icons/bi';
function Loader() {
  return (
    <div className='flex flex-col items-center'>
      <div role='status' className='flex'>
        <p className='animate-pulse '>Loading...</p>
        <BiLoader className='nline h-fulll w-fulll animate-spin' width={50} />
      </div>
    </div>
  );
}

export default Loader;
