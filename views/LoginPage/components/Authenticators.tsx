import Link from 'next/link';

interface Props {
  href: string;
  icon: JSX.Element;
  name: string;
}

const Authenticators = ({ href, icon, name }: Props) => {
  return (
    <Link href={href}>
      <a className='flex items-center gap-2 rounded-lg bg-secondary py-2 px-4 text-white hover:bg-secondary-light'>
        {icon}
        <span>{name}</span>
      </a>
    </Link>
  );
};
export default Authenticators;
