import type { AxiosResponse } from 'axios';
import { Response as Response } from 'typings';

export const axiosSuccess = (
  axiosResponse: AxiosResponse,
  endpoint: string
): Response => {
  console.log(
    `----------------------------------------- AXIOS RESPONSE ${endpoint}-----------------------------------------`
  );
  const { data } = axiosResponse;
  return { data };
};
