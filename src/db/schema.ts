import { sql } from "drizzle-orm";


import { pgTable,uuid, text, varchar, numeric, integer } from "drizzle-orm/pg-core";

const userRoles = ['user','admin'] as const

export type UserRoles = typeof userRoles[number]

export const users = pgTable('users', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  name: text('name').notNull(),
  email:varchar('email',{length:100}).unique().notNull(),
  password:varchar('password',{length:100}).notNull(),
  age:integer('age').notNull(),
  role:varchar('role',{length:20}).$type<UserRoles>().default('user')
})
