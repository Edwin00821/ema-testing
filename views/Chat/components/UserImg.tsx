import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import Image from 'next/image';
interface Props {
  src: string;
  alt?: string;
  width: number;
  height: number;
  active?: boolean;
}

const UserImg = ({ src, alt, width, height, active }: Props) => {
  alt = 'User Image';
  return (
    <div className='relative flex w-[15%] items-center justify-center'>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className='rounded-full object-cover'
      />
      {active && (
        <RiCheckboxBlankCircleFill className='absolute right-0 bottom-1 rounded-full text-sm text-green-500 ring-2 dark:ring-white' />
      )}
    </div>
  );
};

export default UserImg;
