import { NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";

export function errorHandler(error: ApiError, res: NextApiResponse) {
  if (typeof error === 'string') {
    // custom application error
    const is404 = error?.toLowerCase().endsWith('not found');
    const statusCode = is404 ? 404 : 400;
    return res.status(statusCode).json({ message: error });
  }

  if (error.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).json({ message: 'Invalid Token' });
  }

  // default to 500 server error
  console.error(error);
  return res.status(500).json({ message: error.message });
}
