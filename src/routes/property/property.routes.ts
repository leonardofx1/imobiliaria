import type { FastifyInstance } from "fastify";
import { PropertyController } from "../../controllers/property/property.controller.js";
import { createPropertyFactory } from "../../factory/property/createPropertyFactory.js";
import { createPropertyValidation } from "../../validations/property/property.validations.js";
import { deletePropertyFactory } from "../../factory/property/deletePropertyFactory.js";
import z from "zod";
import { updatePropertyFactory } from "../../factory/property/updatePropertyFactory.js";
import { findAllPropertiesFactory } from "../../factory/property/findAllPropertiesFactory.js";
import { findAllPropertiesOwnerIdFactory } from "../../factory/property/findAllPropertyOwnerIdFactory.js";
import { findByPropertyIdFactory } from "../../factory/property/findByPropertyIdFactory.js";


export const propertyRoutes = (app:FastifyInstance)=> {

    
const controllerProperty = new PropertyController(createPropertyFactory,deletePropertyFactory,updatePropertyFactory,findAllPropertiesFactory,findAllPropertiesOwnerIdFactory,findByPropertyIdFactory)

app.post('/',{
    schema:{
        body:createPropertyValidation,
    }
    
},controllerProperty.save)
app.delete('/delete/:idProperty',{
    schema:{
        params:z.object({idProperty:z.uuid()})
    }
},controllerProperty.deletePropertyId)
app.put('/update/:idProperty',{
    schema:{
        body:createPropertyValidation,
        params:z.object({idProperty:z.uuid()})
    }
},controllerProperty.updateProperty )
app.get('/allProperties',controllerProperty.findAllProperties)
app.get('/allProperties/:ownerId',controllerProperty.findAllPropertiesOwnerId)
}