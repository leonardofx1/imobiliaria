import type { FastifyInstance } from "fastify";
import { PropertyController } from "../../controllers/property/property.controller.js";
import { createPropertyFactory } from "../../factory/property/createPropertyFactory.js";
import { createPropertyValidation, maxAndMinProeprtyPrices, numberMinAndMaxOfGaragens } from "../../validations/property/property.validations.js";
import { deletePropertyFactory } from "../../factory/property/deletePropertyFactory.js";
import z from "zod";
import { updatePropertyFactory } from "../../factory/property/updatePropertyFactory.js";
import { findAllPropertiesFactory } from "../../factory/property/findAllPropertiesFactory.js";
import { findAllPropertiesOwnerIdFactory } from "../../factory/property/findAllPropertyOwnerIdFactory.js";
import { findByPropertyIdFactory } from "../../factory/property/findByPropertyIdFactory.js";
import { findAllPropertiesGarageFactory } from "../../factory/property/findAllPropertiesGarageServiceFactory.js";
import { findPropertiesByPriceFactory } from "../../factory/property/findPropertiesByPriceFactory.js";

import type { ZodTypeProvider } from "fastify-type-provider-zod";
const propertyResponseSchema = z.object({
  id: z.string(),
  city: z.string(),
  number: z.number(),
  street: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  vacanciesGarage: z.number(),
  buildingFloor: z.number(),
  price: z.string(),
  ownerId: z.string(),
  area: z.string(),
  bedrooms: z.number(),
  bathrooms: z.number()
});

export const propertyRoutes = (app:FastifyInstance)=> {

    
const controllerProperty = new PropertyController(createPropertyFactory,deletePropertyFactory,updatePropertyFactory,findAllPropertiesFactory,findAllPropertiesOwnerIdFactory,findByPropertyIdFactory,findPropertiesByPriceFactory,findAllPropertiesGarageFactory)

app.withTypeProvider<ZodTypeProvider>().post('/create',{
    onRequest:[app.authenticate],
    
    schema:{
        tags:['property'],
        description:'create a property in the database',
        summary:'create a property.',
        body:createPropertyValidation,
        response:{
            201:z.object({message:z.string()}),
            500:z.object({message:z.string()})
        }
    }
    
},controllerProperty.save)
app.withTypeProvider<ZodTypeProvider>().delete('/delete/:idProperty',{
    onRequest:[app.authenticate],
    schema:{
        tags:['property'],
        summary:'delete a property.',
        description:'should delete the database property.',
        params:z.object({idProperty:z.uuid()}),
        response:{
            204:z.object({message:z.string()}),
            404:z.object({message:z.string()}),
        }
    }
},controllerProperty. deletePropertyId)
app.withTypeProvider<ZodTypeProvider>().put('/update/:idProperty',{
    
    schema:{
        tags:['property'],
        summary:'update property',
        description:'Identifies the property by its ID and updates its data.',
        body:createPropertyValidation,
        params:z.object({idProperty:z.uuid()}),
        response:{
            204:z.object({message:z.string()}),
            404:z.object({message:z.string()})
        }
    },
    onRequest:[app.authenticate]
},controllerProperty.updateProperty )

app.get('/allProperties',{onRequest:[app.authenticate],schema:{
    tags: ['Properties'], 
    summary: 'list all properties.',
    description: 'Returns all properties of the authenticated user.',
    response:{
        200:propertyResponseSchema,
        404:z.object({message:z.string()})
    }
}},controllerProperty.findAllProperties)

app.withTypeProvider<ZodTypeProvider>().get('/allProperties/:ownerId',{schema:{
    tags:['property'],
    summary:'filters by property',
    description:'filters by properties ownerid',
    response:{
        200:z.array(propertyResponseSchema),
        404:z.object({message:z.string()})
    }
}},controllerProperty.findAllPropertiesOwnerId)

app.withTypeProvider<ZodTypeProvider>().get('/propertiesById/:idProperty',{schema:{
    tags:['property'],
    summary:'filter by idProperty',
    description:'filter by property idProperty',
    response:{
        200:propertyResponseSchema,
        404:z.object({message:z.string()}),
    }
}},controllerProperty.findByPropertyById)

app.withTypeProvider<ZodTypeProvider>().post('/garage',{schema:{
    tags:['property'],
    summary:'filter by garage.',
    description:'filters properties by a garage range.',
    body:numberMinAndMaxOfGaragens,
    response:{
        200:z.array(propertyResponseSchema),
        404:z.object({message:z.string()}),
        400:z.object({message:z.string()})
    }
}},controllerProperty.findAllPropertiesGarage)
app.withTypeProvider<ZodTypeProvider>().post('/price',{schema:{
    tags:['property'],
    summary:'filter for price.',
    description:'filters properties by a price range',
    body:maxAndMinProeprtyPrices,
    response:{
        200:z.array(propertyResponseSchema),
        404:z.object({message:z.string()}),
        400:z.object({message:z.string()})
    }
}},controllerProperty.findPropertiesByPrice)
}