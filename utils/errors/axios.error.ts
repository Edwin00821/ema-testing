import { Response } from 'typings';

const axiosError = (error: any, endpoint: string): Response => {
  console.log(
    `-------------------------------- AXIOS ERROR FROM ${endpoint}--------------------------------`
  );

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    const message = error.response.data as string;
    return {
      message,
      data: null,
    };
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
    return error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
  return error.config;
};

export default axiosError;
