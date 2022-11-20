import { NextApiResponse } from 'next';

const apiDeleteError = (res: NextApiResponse, error: any, endpoint: string) => {
  console.log(
    `-----------------------------------------Error desde API ${endpoint}-----------------------------------------`
  );
  console.log(error);

  return res.status(500).json({ message: 'Internal server error' });
};

export default apiDeleteError;
