import { useContext } from 'react';
import { ChatContext } from '../context';

const useContextChat = () => {
  const chat = useContext(ChatContext);
  return chat;
};

export default useContextChat;
