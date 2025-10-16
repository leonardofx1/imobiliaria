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
import { PropertyDto } from "../../dto/propertyDto.js";
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
        description:'creat a property in the database',
        summary:'creat a property.',
        body:createPropertyValidation,
    }
    
},controllerProperty.save)
app.withTypeProvider<ZodTypeProvider>().delete('/delete/:idProperty',{
    onRequest:[app.authenticate],
    schema:{
        tags:['property'],
        summary:'delete a property.',
        description:'should delete the database property.',
        params:z.object({idProperty:z.uuid()})
    }
},controllerProperty. deletePropertyId)
app.withTypeProvider<ZodTypeProvider>().put('/update/:idProperty',{
    
    schema:{
        tags:['property'],
        body:createPropertyValidation,
        params:z.object({idProperty:z.uuid()})
    },
    onRequest:[app.authenticate]
},controllerProperty.updateProperty )
app.get('/allProperties',{onRequest:[app.authenticate],schema:{
    tags: ['Properties'], 
    summary: 'Listar todas as propriedades',
    description: 'Retorna todas as propriedades do usuário autenticado',

    
    response:{
        200:propertyResponseSchema
    }
}},controllerProperty.findAllProperties)
app.withTypeProvider<ZodTypeProvider>().get('/allProperties/:ownerId',{schema:{
    tags:['property'],
    response:{
        200:z.array(propertyResponseSchema)
    }
}},controllerProperty.findAllPropertiesOwnerId)
app.withTypeProvider<ZodTypeProvider>().get('/propertiesById/:idProperty',{schema:{
    tags:['property'],
}},controllerProperty.findByPropertyById)
app.withTypeProvider<ZodTypeProvider>().post('/garage',{schema:{
    tags:['property'],
    body:numberMinAndMaxOfGaragens
}},controllerProperty.findAllPropertiesGarage)
app.withTypeProvider<ZodTypeProvider>().post('/price',{schema:{
    tags:['property'],
    body:maxAndMinProeprtyPrices
}},controllerProperty.findPropertiesByPrice)
}