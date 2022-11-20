import Head from 'next/head';
import { SideBarDashboard } from '../Header';
interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}
const LayoutAdmin = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo3.ico' />
      </Head>

      <div className='grid-col-1 grid h-screen lg:grid-cols-[18%_minmax(18%,_1fr)]'>
        <SideBarDashboard />
        <main className='h-screen bg-gray-100 p-4 md:p-8 lg:p-12'>
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
