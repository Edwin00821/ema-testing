import { createContext } from 'react';

export interface chat {
  name: string;
  src: string;
  messages: React.ReactNode[];
  main: boolean;
}

export interface ContextPropsChat {
  messagesChat: chat[];
  userMessage: string;
  optionChat: string;
  query: string;
  lastMessage: string;
  minOption: number;
  maxOption: number;
  firstId: number;
  secondId: number;

  setMessagesChat: (messagesChat: chat[]) => void;
  setUserMessage: (userMessage: string) => void;
  setOptionChat: (optionChat: string) => void;
  setQuery: (query: string) => void;
  setLastMessage: (query: string) => void;
  setMinOption: (minOption: number) => void;
  setMaxOption: (maxOption: number) => void;
  setFirstId: (firstId: number) => void;
  setSecondId: (secondId: number) => void;
}

export const ChatContext = createContext({} as ContextPropsChat);
