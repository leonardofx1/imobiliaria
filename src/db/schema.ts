import { sql } from "drizzle-orm";


import { pgTable,uuid, text, varchar, numeric, integer } from "drizzle-orm/pg-core";

const userRoles = ['user','admin'] as const

export type UserRoles = typeof userRoles[number]

const propertyStatus = ['rented','available','pending']

export type PropertyStatus = typeof propertyStatus

export const users = pgTable('users', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  name: text('name').notNull(),
  email:varchar('email',{length:100}).unique().notNull(),
  password:varchar('password',{length:100}).notNull(),
  age:integer('age').notNull(),
  role:varchar('role',{length:20}).$type<UserRoles>().default('user')
})

export const property = pgTable('property', {
  id:integer('id').notNull().primaryKey(),
  city:varchar('city',{length:30}),
  number:integer('number'),
  street:text('street').notNull(),

  title:text('title').notNull(),
  description:text('description').notNull(),
  type:text('type').notNull().$type<PropertyStatus>(),
  vacanciesGarage:integer('vacanciesGarage').notNull(),
  buildingFloor:text('buildingFloor'),
  price:numeric('price').notNull(),
  ownerId:uuid('ownerId').references(()=> users.id),
  area:numeric('area'),
  bedrooms:integer('bedrooms').notNull(),
  bathrooms:integer('bathrooms').notNull(),

})
export const expenses = pgTable('expenses', {
  id:integer('id').primaryKey().notNull(),
  imovelId:integer('propertyId').notNull().references(()=> property.id),
  condoFee:numeric('condoFee'),
  propertyTax:numeric('propertyTax'),
  maintenanceCosts:numeric('maintenanceCosts'),
})