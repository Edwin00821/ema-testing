import {
  RiImage2Line,
  RiEmotionHappyLine,
  RiSendPlaneLine,
} from 'react-icons/ri';
import { BiMicrophone, BiMap } from 'react-icons/bi';

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { valideteMaterial } from 'libs/validateChat';
import { chat, ChatContext } from '../context';

interface Props {
  setChats: Dispatch<SetStateAction<chat[]>>;
  setUserMessage: Dispatch<SetStateAction<string>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setLastQuery: Dispatch<SetStateAction<string>>;
}

const SendMessage = ({
  setChats,
  setQuery,
  setLastQuery,
  setUserMessage,
}: Props) => {
  const { messagesChat } = useContext(ChatContext);
  const [messageUser, setMessageUser] = useState('');

  const setMessage = (message: string, main: boolean) => {
    setChats((prev) => [
      ...prev,
      {
        name: main ? 'User Default' : 'EMA',
        src: main ? '/img/user.png' : '/img/logo3.png',
        messages: [message],
        main: main,
      },
    ]);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageUser !== '') {
      setMessage(messageUser, true);
      setUserMessage(messageUser);
      setMessageUser('');
    }
    if (valideteMaterial(messageUser)) {
      setLastQuery('CONSULTAR MATERIAL');
      setUserMessage('CONSULTAR MATERIAL');
    }
  };
  return (
    <div className=' w-full bg-white p-4 dark:bg-[#22222A]'>
      <form className='relative' onSubmit={onSubmit}>
        <BiMicrophone className='absolute left-4 top-[10px] text-xl hover:cursor-pointer dark:text-gray-300' />
        <input
          type={'text'}
          className='w-full rounded-full bg-gray-100 py-2 pl-12 pr-28 outline-none dark:bg-[#1E1F24] dark:text-gray-300'
          value={messageUser}
          onChange={(e) => setMessageUser(e.target.value)}
        />
        {/* Icons message */}
        <div className='absolute right-4 top-3 flex items-center gap-2 dark:text-gray-300'>
          <RiImage2Line className='hover:cursor-pointer' />
          <RiEmotionHappyLine className='hover:cursor-pointer' />
          <RiSendPlaneLine className='hover:cursor-pointer' />
          <BiMap className='hover:cursor-pointer' />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
