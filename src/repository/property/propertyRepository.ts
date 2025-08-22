import { and, between, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { property } from "../../db/schema.js";
import type { PropertyDto } from "../../dto/propertyDto.js";
import type { IPropertyRepository } from "./IPropertyRepository.js";
import { gte, lte } from "zod";


export class PropertyRepository implements IPropertyRepository {
    constructor(){}
    save= async (_property: PropertyDto) =>{
        return  db.insert(property).values(_property ).returning({id:property.id})
      
    }

    findAllProperties=async () => {
        const properties =await db.select().from(property) as PropertyDto[]
        return properties
    };
    findAllPropertiesGarage=async  (amountOfGarage:number) =>{
        const properties = await db.select().from(property).where(eq(property.vacanciesGarage, amountOfGarage))as PropertyDto[]
        return properties
    }
    findAllPropertiesOwnerId = async (ownerId: string) => {
        const propertie = await db.select().from(property).where(eq(property.id, ownerId)) as PropertyDto[]
        return propertie
    }
    findByPropertyId = async (id: string) => {
        const propertie =  await db.select().from(property).where(eq(property.id,id))as PropertyDto[]
        return propertie

    }
    findPropertiesByPrice = async (initialValue: number, endValue: number) => {
        const properties = await db.select().from(property).where(between(property.vacanciesGarage,initialValue ,endValue)) as PropertyDto[]
        return properties 
    }
     
}