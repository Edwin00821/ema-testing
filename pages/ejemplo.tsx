import { LayoutStudent } from 'components/Layouts';

import { ChatPage, ChatProvider } from 'views/Chat';
function App() {
  return (
    <LayoutStudent title='Ejemplo' description='a'>
      <ChatProvider>
        <ChatPage />
      </ChatProvider>
    </LayoutStudent>
  );
}

export default App;
