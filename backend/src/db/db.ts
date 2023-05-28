import { Pool } from "pg";

import * as dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: `${process.env.DATABASE_PASSWORD}`,
  port: Number(process.env.DATABASE_PORT),
  host: process.env.DATABASE_HOST,
});
