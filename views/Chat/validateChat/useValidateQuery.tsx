import { useValidateQueryError, useValidateQuerySuccess } from '../hooks';
interface Props {
  validOptionChat: string;
  validQuery: string;
  message: string;
  callback: () => void;
}
const useValidateQuery = ({
  validOptionChat,
  validQuery,
  message,
  callback,
}) => {
  useValidateQueryError(validOptionChat, validQuery, message);
  useValidateQuerySuccess(validOptionChat, validQuery, callback);
};

export default useValidateQuery;
