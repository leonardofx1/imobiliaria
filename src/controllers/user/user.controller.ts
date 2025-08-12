import type { FastifyReply, FastifyRequest } from "fastify";



export class UserController {
    consatructor(){}


    save = async (req:FastifyRequest,reply:FastifyReply) => {
        console.log('chamou ', req.body)
    }
    
}