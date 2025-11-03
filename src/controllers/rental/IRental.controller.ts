import type { FastifyReply, FastifyRequest } from "fastify";



export interface IRentalController {
    create:(req:FastifyRequest,reply:FastifyReply)=> void
    delete:(req:FastifyRequest,reply:FastifyReply)=> void
    update:(req:FastifyRequest,reply:FastifyReply)=> void
    getRental:(req:FastifyRequest,reply:FastifyReply) => void
    
}