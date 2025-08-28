import type { FastifyInstance } from "fastify";
import { PropertyController } from "../../controllers/property/property.controller.js";
import { createPropertyFactory } from "../../factory/property/createPropertyFactory.js";
import { createPropertyValidation } from "../../validations/property/property.validations.js";
import { deletePropertyFactory } from "../../factory/property/deletePropertyFactory.js";
import z from "zod";


export const propertyRoutes = (app:FastifyInstance)=> {
    
const controllerProperty = new PropertyController(createPropertyFactory,deletePropertyFactory)

app.post('/property',{
    schema:{
        body:createPropertyValidation,
    }
    
},controllerProperty.save)
app.patch('/delete:idProperty',{
    schema:{
        params:z.object({idProperty:z.uuid()})
    }
},controllerProperty.deletePropertyId)
}