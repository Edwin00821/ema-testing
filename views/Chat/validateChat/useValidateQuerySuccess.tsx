const useValidateQuerySuccess = (
  validOptionChat: string,
  validQuery: string,
  optionChat: string,
  query: string,
  userMessage: string,
  minOption: number,
  maxOption: number,
  callback: () => void
) => {
  if (
    optionChat === validOptionChat &&
    query === validQuery &&
    Number(userMessage) >= minOption &&
    Number(userMessage) <= maxOption
  ) {
    callback();
  }
};

export default useValidateQuerySuccess;
