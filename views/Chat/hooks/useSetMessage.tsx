import React, { useContext } from 'react';
import { ChatContext } from '../context';

const useSetMessage = (messages: React.ReactNode[]) => {
  const { messagesChat, setMessagesChat } = useContext(ChatContext);
  setMessagesChat([
    ...messagesChat,
    {
      name: 'EMA',
      src: '/img/logo3.png',
      messages,
      main: false,
    },
  ]);
};

export default useSetMessage;
