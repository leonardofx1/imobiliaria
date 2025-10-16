import type { FastifyReply, FastifyRequest } from "fastify";



export const authenticate = (req:FastifyRequest,reply:FastifyReply)=> {
    try {
        console.log('chamou',req.jwtVerify())
        req.jwtVerify()
    } catch (error) {
        reply.status(401).send({message:'unauthorized'})
    }
}