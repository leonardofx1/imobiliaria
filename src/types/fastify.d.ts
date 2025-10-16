import "fastify" 
import type { FastifyRequest,FastifyReply } from "fastify"

declare module "fastify" {
    interface FastifyInstance {
        authenticate:(request:FastifyRequest,reply:FastifyReplay) => void
    }
}