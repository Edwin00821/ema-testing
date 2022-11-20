import type { NextPage } from 'next';
import { LoginPage, LoginLayout } from 'views/LoginPage';

const App: NextPage = () => {
  return (
    <LoginLayout title='Login' description='Login EMA'>
      <LoginPage />
    </LoginLayout>
  );
};

export default App;
