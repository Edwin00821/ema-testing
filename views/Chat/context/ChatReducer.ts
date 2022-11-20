import { chat, ContextPropsChat } from './';
type ChatActionType =
  | { type: 'SET_MESSAGES_CHAT'; payload: chat[] }
  | { type: 'SET_USER_MESSAGE'; payload: string }
  | { type: 'SET_OPTION_CHAT'; payload: string }
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_LAST_MESSAGE'; payload: string }
  | { type: 'SET_MIN_OPTION'; payload: number }
  | { type: 'SET_MAX_OPTION'; payload: number }
  | { type: 'SET_FIRST_ID'; payload: number }
  | { type: 'SET_SECOND_ID'; payload: number };

export const ChatReducer = (
  state: ContextPropsChat,
  action: ChatActionType
) => {
  switch (action.type) {
    case 'SET_MESSAGES_CHAT':
      return {
        ...state,
        messagesChat: action.payload,
      };
    case 'SET_USER_MESSAGE':
      return {
        ...state,
        userMessage: action.payload,
      };
    case 'SET_OPTION_CHAT':
      return {
        ...state,
        optionChat: action.payload,
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    case 'SET_LAST_MESSAGE':
      return {
        ...state,
        query: action.payload,
      };
    case 'SET_MIN_OPTION':
      return {
        ...state,
        minOption: action.payload,
      };
    case 'SET_MAX_OPTION':
      return {
        ...state,
        maxOption: action.payload,
      };
    case 'SET_FIRST_ID':
      return {
        ...state,
        firstId: action.payload,
      };
    case 'SET_SECOND_ID':
      return {
        ...state,
        secondId: action.payload,
      };

    default:
      return state;
  }
};
