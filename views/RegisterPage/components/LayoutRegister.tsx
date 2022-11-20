import { Header } from 'components/Header';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}
const LayoutHome = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={description} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default LayoutHome;
