import type { FastifyReply, FastifyRequest } from "fastify";

interface IdProperty {
    idProperty:string
}
export interface IPropertyController {
    save:(req:FastifyRequest,reply:FastifyReply) => void
    deletePropertyId:(req:FastifyRequest<{Params:IdProperty}>,reply:FastifyReply) => void
    updateProperty:(req:FastifyRequest<{Params:IdProperty}>,reply:FastifyReply) => void
    findAllProperties:(req:FastifyRequest,reply:FastifyReply) => void
    findByPropertyId:(req:FastifyRequest,reply:FastifyReply) => void
    findAllPropertiesGarage:(req:FastifyRequest,reply:FastifyReply) => void
    findAllPropertiesOwnerId:(req:FastifyRequest<{Params:{ownerId:string}}>,reply:FastifyReply)=>void 
    findPropertiesByPrice:(req:FastifyRequest,reply:FastifyReply) => void

}