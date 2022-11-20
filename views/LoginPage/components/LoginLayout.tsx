import Head from 'next/head';
import { Header } from 'components/Header';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}
const LoginLayout = ({ title, description, children }: Props) => {
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
      {children}
    </>
  );
};

export default LoginLayout;
