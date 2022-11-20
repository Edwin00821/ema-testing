import React, { FC, useEffect } from 'react';
import { useSetMessage } from '../hooks';
import useContextChat from '../hooks/useContextChat';

const useValidateQueryError = (
  validOptionChat: string,
  validQuery: string,
  message: string
) => {
  const {
    optionChat,
    userMessage,
    query,
    minOption,
    maxOption,
    setLastMessage,
  } = useContextChat();
  if (
    optionChat === validOptionChat &&
    query === validQuery &&
    (!Number(userMessage) ||
      Number(userMessage) < minOption ||
      Number(userMessage) > maxOption)
  ) {
    useSetMessage([<p>{message}</p>]);
    setLastMessage(message);
  }
  return <></>;
};

export default useValidateQueryError;
