import { Header } from 'components/Header';
import Head from 'next/head';
import { NavHome } from 'libs/menuNav';

interface Props {
  title: string;
  description: string;
  isHome?: boolean;
  children: React.ReactNode;
}
const LayoutHome = ({ title, description, isHome, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Header navs={NavHome} isHome={isHome} />
      <main>{children}</main>
    </>
  );
};

export default LayoutHome;
