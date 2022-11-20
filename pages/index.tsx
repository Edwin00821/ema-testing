import type { NextPage } from 'next';
import { LayoutHome } from 'components/Layouts';
import {
  Footer,
  Banner,
  Philosophy,
  Mision,
} from 'components/Home';

const App: NextPage = () => {
  return (
    <LayoutHome
      title='EMA'
      description='EMA es una empresa desarrollada por alumnos del Cecyt9 para ayudar a los estudaintes con su aprendizaje escolar'
      isHome
    >
      <main className='relative bg-primary-light py-8 px-12 dark:bg-tertiary md:min-h-[80vh] lg:min-h-screen'>
        <Banner />
        <Philosophy />
        <Mision />
        {/* <Objectives /> */}
      </main>
      <Footer />
    </LayoutHome>
  );
};

export default App;
