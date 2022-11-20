import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const App: NextPage = () => {
  const router = useRouter();

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(router.asPath.split('/')[2]);
    console.log('From a', url);

    router.push('/admin/clients');
  }, []);

  useEffect(() => {
    console.log('From b', url);
  }, [router.query.counter]);

  return <>{url}</>;
};

export default App;
