import Head from 'next/head';
import { Header } from 'components/Header';
import { NavAdmin } from 'libs/menuNav';

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
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Header navs={NavAdmin} />
      <main>{children}</main>
    </>
  );
};

export default LayoutAdmin;
