import { NextApiResponse } from 'next';

export const apiDeleteSuccess = (
  res: NextApiResponse,
  data: any,
  name: string
) => {
  console.log(
    `----------------------------------------- API ${name}-----------------------------------------`
  );
  if (!data) return res.status(404).json({ message: `${name} not found` });
  return res.status(200).json({ message: `Deleted ${name}` });
};
