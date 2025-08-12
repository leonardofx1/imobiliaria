import type { FastifyReply, FastifyRequest } from "fastify";


export interface IUserController {
    save:(req:FastifyRequest,rep:FastifyReply) => void
    getAll:(req:FastifyRequest,rep:FastifyReply) => void
    login:(req:FastifyRequest,rep:FastifyReply) => void
}                         