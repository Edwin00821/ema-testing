import { createPool } from 'mysql2/promise';

export type { ResultSetHeader } from 'mysql2/promise';

export const pool = createPool({
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  port: Number(process.env.DB_PORT as string),
});

