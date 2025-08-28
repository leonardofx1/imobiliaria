import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateUserDto } from "../../dto/userDto.js";


export interface IUserController {
    save:(req:FastifyRequest<{Body:CreateUserDto}>,rep:FastifyReply) => void
    getAll:(req:FastifyRequest,rep:FastifyReply) => void
    login:(req:FastifyRequest,rep:FastifyReply) => void
}                         