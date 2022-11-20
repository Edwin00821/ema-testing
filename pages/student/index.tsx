import { LayoutStudent } from 'components/Layouts';
import type { NextPage } from 'next';
import StudentPage from 'views/Student';

const App: NextPage = () => {
  return (
    <LayoutStudent title='Home' description='a'>
      <StudentPage />
    </LayoutStudent>
  );
};

export default App;
