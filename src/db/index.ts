import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js'
import { Pool } from 'pg';
import dotenv from 'dotenv'
dotenv.config()
const poll = new Pool({ connectionString:process.env.DATABASE_URL as string,})
export const db = drizzle(poll, {schema})
