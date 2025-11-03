import type { FastifyReply, FastifyRequest } from "fastify";



export const authenticate = async (req:FastifyRequest,reply:FastifyReply)=> {
    try {

        req.jwtVerify()
    } catch (error) {
        reply.status(401).send({message:'unauthorized'})
    }
}