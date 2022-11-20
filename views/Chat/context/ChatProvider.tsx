import { useReducer } from 'react';
import { ChatContext, ChatReducer, ContextPropsChat, chat } from './';

export const initialChats: chat[] = [
  {
    name: 'EMA',
    src: '/img/logo3.png',
    messages: ['Hola, Bienvenido a EMA', '¿En que te puedo ayudar?'],
    main: false,
  },
];

export const initialState: ContextPropsChat = {
  messagesChat: [],
  userMessage: '',
  optionChat: '',
  query: '',
  lastMessage: '',
  minOption: 0,
  maxOption: 0,
  firstId: 0,
  secondId: 0,
  setMessagesChat: (_messageChat: chat[]) => {},
  setUserMessage: (_userMessage: string) => {},
  setOptionChat: (_optionChat: string) => {},
  setQuery: (_query: string) => {},
  setLastMessage: (_lastMessage: string) => {},
  setMinOption: (_minOption: number) => {},
  setMaxOption: (_maxOption: number) => {},
  setFirstId: (_firstId: number) => {},
  setSecondId: (_secondId: number) => {},
};

interface Props {
  children: React.ReactNode;
}

export const ChatProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  const setMessagesChat = (messageChat: chat[]) => {
    dispatch({ type: 'SET_MESSAGES_CHAT', payload: messageChat });
  };
  const setUserMessage = (userMessage: string) => {
    dispatch({ type: 'SET_USER_MESSAGE', payload: userMessage });
  };
  const setOptionChat = (optionChat: string) => {
    dispatch({ type: 'SET_OPTION_CHAT', payload: optionChat });
  };
  const setQuery = (query: string) => {
    dispatch({ type: 'SET_QUERY', payload: query });
  };
  const setLastMessage = (lastMessage: string) => {
    dispatch({ type: 'SET_LAST_MESSAGE', payload: lastMessage });
  };
  const setMinOption = (minOption: number) => {
    dispatch({ type: 'SET_MIN_OPTION', payload: minOption });
  };
  const setMaxOption = (maxOption: number) => {
    dispatch({ type: 'SET_MAX_OPTION', payload: maxOption });
  };
  const setFirstId = (firstId: number) => {
    dispatch({ type: 'SET_FIRST_ID', payload: firstId });
  };
  const setSecondId = (secondId: number) => {
    dispatch({ type: 'SET_SECOND_ID', payload: secondId });
  };
  return (
    <ChatContext.Provider
      value={
        {
          ...state,
          setMessagesChat,
          setUserMessage,
          setOptionChat,
          setQuery,
          setLastMessage,
          setMinOption,
          setMaxOption,
          setFirstId,
          setSecondId,
        } as ContextPropsChat
      }
    >
      {children}
    </ChatContext.Provider>
  );
};
