import type { FastifyReply, FastifyRequest } from "fastify";


export interface IPropertyController {
    save:(req:FastifyRequest,reply:FastifyReply) => void
    deletePropertyId:(req:FastifyRequest<{Params:{idProperty:string}}>,reply:FastifyReply) => void
    updateProperty:(req:FastifyRequest,reply:FastifyReply) => void
    findAllProperties:(req:FastifyRequest,reply:FastifyReply) => void
    findByPropertyId:(req:FastifyRequest,reply:FastifyReply) => void
    findAllPropertiesGarage:(req:FastifyRequest,reply:FastifyReply) => void
    findAllPropertiesOwnerId:(req:FastifyRequest,reply:FastifyReply)=>void 
    findPropertiesByPrice:(req:FastifyRequest,reply:FastifyReply) => void

}