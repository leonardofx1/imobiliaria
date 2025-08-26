import type { FastifyInstance } from "fastify";
import { PropertyController } from "../../controllers/property/property.controller.js";
import { propertyFactory } from "../../factory/property/createProperty.js";


export const propertyRoutes = (app:FastifyInstance)=> {
    
const controllerProperty = new PropertyController(propertyFactory)

app.post('/property',controllerProperty.save)
}