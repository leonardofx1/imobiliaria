import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js'
import { Pool } from 'pg';

const poll = new Pool({ connectionString:'postgres://postgres:postgres@localhost:5432/mydb',})
export const db = drizzle(poll, {schema})
